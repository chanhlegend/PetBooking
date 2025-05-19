const Service = require('../models/Service');

class serviceController {
    async getAllServices(req, res) {
        try {
            const services = await Service.find();
            return res.status(200).json(services);
        } catch (error) {
            return res.status(500).json({ message: 'Server error', error });
        }
    }

    async createService(req, res) {
        try {
            const { serviceName, description, price, userId, image } = req.body;
            const newService = new Service({
                serviceName,
                userId,
                description,
                price,
                image
            });
            await newService.save();
            return res.status(201).json(newService);
        } catch (error) {
            return res.status(500).json({ message: 'Server error', error });
        }
    }

    async getServiceById(req, res) {
        try {
            const { id } = req.params;
            const service = await Service.findById(id);
            if (!service) {
                return res.status(404).json({ message: 'Service not found' });
            }
            return res.status(200).json(service);
        } catch (error) {
            return res.status(500).json({ message: 'Server error', error });
        }
    }

    async updateService(req, res) {
        try {
            const { id } = req.params;
            const { serviceName, description, price, userId, image } = req.body;
            const updatedService = await Service.findByIdAndUpdate(id, {
                serviceName,
                userId,
                description,
                price,
                image
            }, { new: true });
            if (!updatedService) {
                return res.status(404).json({ message: 'Service not found' });
            }
            return res.status(200).json(updatedService);
        } catch (error) {
            return res.status(500).json({ message: 'Server error', error });
        }
    }
    
    async deleteService(req, res) {
        try {
            const { id } = req.params;
            const deletedService = await Service.findByIdAndDelete(id);
            if (!deletedService) {
                return res.status(404).json({ message: 'Service not found' });
            }
            return res.status(200).json({ message: 'Service deleted successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Server error', error });
        }
    }

    async getServiceByUserId(req, res) {
        try {
            const { userId } = req.params;
            const services = await Service.find({ userId });
            if (!services) {
                return res.status(404).json({ message: 'No services found for this user' });
            }
            return res.status(200).json(services);
        } catch (error) {
            return res.status(500).json({ message: 'Server error', error });
        }
    }
}   

module.exports = new serviceController();
