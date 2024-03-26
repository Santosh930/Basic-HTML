const mongoose=require('mongoose');
const { findByIdAndDelete } = require('../../models/user');
const {Schema}=mongoose;

main().then(()=>{
    console.log('Connected to DB');
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema=new Schema({
    item:String,
    price:Number,
});

const customerSchema=new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:'Order',
        }
    ]

});
// customerSchema.pre("findOneAndDelete",async ()=>{
//     console.log('Pre middleware');
// });
customerSchema.post("findOneAndDelete",async (data)=>{
    // console.log(data);
    if(data.orders.length){
        let res=await Order.deleteMany({_id:{$in:Customer.orders}});
        console.log(res);
    }
})

const Order=mongoose.model('Order',orderSchema);
const Customer=mongoose.model('Customer',customerSchema);

const addCustomer=async ()=>{
    let newCust=new Customer({
        name:'Ram',

    });
    let newOrder=new Order({
        item:'Pizza-2',
        price:350,  
    });
    newCust.orders.push(newOrder);
    await newOrder.save();
    await newCust.save();
    console.log('Added new customers');
// let order1=await Order.findOne({item:'samosa'});
// let order2=await Order.findOne({item:'kalajamun'});
// cust1.orders.push(order1);
// cust1.orders.push(order2);
// let result=await cust1.save();
// console.log(result);
// let customerDetails=await Customer.find({});
// console.log(customerDetails);
}






// const addOrders=async ()=>{
//    let res= await Order.insertMany([
//         {item:'samosa',price:12},
//         {item:'kalajamun',price:20},
//         {item:'khaja',price:30},

//     ]);
//     console.log(res);
// }
// addOrders();
addCustomer();


const findCustomer= async ()=>{
    let result= await Customer.find({}).populate('orders');
    // console.log(result[0]);
}
// findCustomer();


const delCust=async ()=>{
    const data=await Customer.findByIdAndDelete("65fea64cfc0e281ef623f93a");
    console.log(data);
}
delCust();