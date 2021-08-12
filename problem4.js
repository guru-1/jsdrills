
function problem4(inventory)
{
    var a=[]
    for (let i=0;i<inventory.length;i++)
    {
        a.push(inventory[i].car_year);
    }
    return a;
}
export {
    problem4
};