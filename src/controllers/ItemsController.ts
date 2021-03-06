import { Request, Response } from "express";
import knex from "../database/connection";

export default class ItemsController {
  async index(req: Request, res: Response) {
    const items = await knex("items").select("*");

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `https://e-coleta-api.herokuapp.com/uploads/${item.image}`,
      };
    });

    return res.json(serializedItems);
  }
}
