

function problem6(inventory)
{
    var array=[];
    for(let i=0;i<inventory.length;i++)
    {
        if(inventory[i].car_make == "Audi" || inventory[i].car_make == "BMW")
        {
            array.push(inventory[i]);
        }
    }
    return array;
}

export{
    problem6
};