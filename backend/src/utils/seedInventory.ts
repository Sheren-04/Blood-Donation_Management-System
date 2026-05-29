import Inventory from "../models/Inventory";

export const seedInventory = async () => {
  const bloodGroups = [
    "A+","A-","B+","B-","AB+","AB-","O+","O-"
  ];

  for (const group of bloodGroups) {
    const exists = await Inventory.findOne({ bloodGroup: group });

    if (!exists) {
      await Inventory.create({
        bloodGroup: group,
        unitsAvailable: 0,
        pricePerUnit: 3000,
        status: "Available"
      });

      console.log(`${group} inventory seeded`);
    }
  }
};
