function problem5(car_array)
{
var older=[];

for(let i=0;i<car_array.length;i++)
{
  if(car_array[i]<2000)
  {
    older.push(car_array[i]);
  }
}
return older;
}
export{
  problem5
};

