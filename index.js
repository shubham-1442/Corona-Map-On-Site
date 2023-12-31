function updatemap()
{
  fetch("/data.json")
  .then(Response => Response.json())
  .then(rsp =>{
    console.log(rsp.data)
    rsp.data.forEach(element => {
      latitude = element.latitude;
      longitude = element.longitude; 
      cases= element.infected;
      if(cases>255)
      {
      color = "rgb(144, 5, 0)";
      }
      else{
        color=`rgb(${cases},0,0)`;
      }


        //Mark on the Map
        new mapboxgl.Marker({
           draggable: false,
           color: color

        })
        .setLngLat([longitude,latitude])
        .addTo(map);
    });

  })


}

updatemap();