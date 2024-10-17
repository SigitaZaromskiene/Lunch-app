import data from "../../data/db.json"



export function MenuSearchVendor (){
    const vendorsID = data.vendors
    const {id} =vendorsID
    const meals  = data.meals
   
       return meals.filter (meal=>meal.vendorId===vendorsID.id)
     
}