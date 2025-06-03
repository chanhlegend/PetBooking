const Service = require("../models/Service");
const ServicePrice = require("../models/ServicePrice");
const WeightRange = require("../models/WeightRange");

class serviceController {
  async gettAllServices(req, res) {
    try {
      const services = await Service.find()
        .populate({ path: "image" })
        .populate("userId");
      return res.status(200).json(services);
    } catch (error) {
      return res.status(500).json({ message: "Server error", error });
    }
  }

  async getAllServicePrice(req, res) {
    try {
      const servicePrice = await ServicePrice.find()
        .populate({ path: "serviceId", populate: [{ path: "image" }] })
        .populate("weightRange");
      return res.status(200).json(servicePrice);
    } catch (error) {
      return res.status(500).json({ message: "Server error", error });
    }
  }

  async createWeightRange(req, res) {
    try {
      const { minWeight, maxWeight } = req.body;
      if (minWeight >= maxWeight) {
        return res
          .status(400)
          .json({ message: "Min weight must be less than max weight" });
      }
      const newWeightRange = new WeightRange({
        minWeight,
        maxWeight,
      });
      await newWeightRange.save();
      return res.status(201).json(newWeightRange);
    } catch (error) {
      return res.status(500).json({ message: "Server error", error });
    }
  }

  async createService(req, res) {
    try {
      const { serviceName, userId, description, image, priceRange } = req.body;
      const newService = new Service({
        serviceName,
        userId,
        description,
        image,
        priceRange,
      });
      await newService.save();
      return res.status(201).json(newService);
    } catch (error) {
      return res.status(500).json({ message: "Server error", error });
    }
  }

  async createServicePrice(req, res) {
    try {
      const { serviceId, price, weightRange } = req.body;
      const newServicePrice = new ServicePrice({
        serviceId,
        price,
        weightRange,
      });
      await newServicePrice.save();
      return res.status(201).json(newServicePrice);
    } catch (error) {
      return res.status(500).json({ message: "Server error", error });
    }
  }
}

module.exports = new serviceController();
