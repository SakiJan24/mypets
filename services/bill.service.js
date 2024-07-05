const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const typeDocService = require('../services/typeDoc.service');
const tdService = new typeDocService(); 

class BillService {

    constructor() {}

    async find() {
        const rta = await models.Bill.findAll();
        return rta;
    }

    async findOne(id) {
        const bill = await models.Bill.findByPk(id);
        if (!bill) {
            throw boom.notFound('Owner not found');
        }
        return bill;
    }

    async create(data) {

        const newBill = await models.Bill.create(data);
        return newBill;
    }

    async update(id, changes) {
        const bill = await this.findOne(id);
        const rta = await bill.update(changes);
        return rta;
    }

    async delete(id) { 
        const bill = await this.findOne(id);
        await bill.destroy();
        return { rta: true };
    }

    async generate(id) {

        const query = 'SELECT bill_treament.id, SUM(bill_treatment.quantity * treatment.price) AS total_price FROM bills JOIN bill_treatment ON bills.id = billTreatment.bill_id JOIN treatment ON billTreament.treatment_id = treatment.id WHERE bills.id == :id';
        const [results, metadata] = await  sequelize.query(query, {
            
            replacements: { typeDoc },
            type: sequelize.QueryTypes.SELECT
        });
    }
}

module.exports = BillService;
