
function problem3(inventory)
{
    var a=[];
    for(let i=0;i<inventory.length;i++)
    {
        a.push(inventory[i].car_model);
    }
    return a;
}
export{
    problem3
}
