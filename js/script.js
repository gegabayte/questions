// {
//     const user = {
//         name: "Xasanboy",
//         age: 15,
//         weight:57,
//         phone: ["+998882608131", "+998947926226"],
//         "likes fruite": true
//     }
//     for (const key in user) {
//         console.log(user[key]);
//         console.log(key);
//     }
// }
// {
//     function Users(name, age, phone) {
//         this.name = name;
//         this.age = age;
//         this.phone = phone;
//     }
//     let Xasanboy = new Users("Xasanboy", 15, "+998882608131")
//     console.log(Xasanboy);
// }
{
    let user = [
        {
            name: "john",
            age: 56
        },
        {
            name: "Alex",
            age: 56
        }
    ]
    let data = JSON.stringify(user)
    console.log(data);
    let json = '[{"name":"john","age":56},{"name":"Alex","age":56}]';
    let perse = JSON.perse(json)
    console.log(perse); 
}
{
    //Heop
    //call>toc>
}
{

}