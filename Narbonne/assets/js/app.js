window.onload = function(){
			var mymap = L.map('mapid').setView([43.1833 , 3], 15.5);

			var tileStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
   			 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   				 maxZoom: 18,
    				id: 'mapbox/streets-v11',
   				 tileSize: 512,
    				zoomOffset: -1,
    				accessToken: 'pk.eyJ1IjoiYWhtZWRvbWVyIiwiYSI6ImNramw3em13aTA2Ymwyc3FwaGt5bmdyOTIifQ.EvWrUCx9gkf4Msizxx7leQ'
				});
			tileStreets.addTo(mymap);

            // City Narbonne

            var sportIcon = L.icon({
   			 iconUrl: 'assets/Images/city2.png',
   			 iconSize: [65, 65],
   			 iconAnchor: [0, 45],
   			 popupAnchor: [22.5, -45],
 			 });


			var marker = L.marker([43.1833 , 3],{icon:sportIcon}).addTo(mymap);
			marker.bindPopup("<p><b>Narbonne est une ville du sud de la France, située sur le Canal de la Robine. Elle est connue pour sa station balnéaire : Narbonne Plage.</p><img src='assets/Images/n1.jpg'/> ");

              // Second Marker

              var sportIcon = L.icon({
   			 iconUrl: 'assets/Images/home.png',
   			 iconSize: [65, 65],
   			 iconAnchor: [0, 45],
   			 popupAnchor: [22.5, -45],
 			 });


		var marker2 = L.marker([43.183782 ,  2.996564],{icon:sportIcon}).addTo(mymap);
		marker2.bindPopup("<p><b>Cette maison est le lieu qui a vu naître l’artiste le 18 mai 1913. Bien plus que cela, elle est aussi le lieu d’éveil d’une vocation artistique exceptionnelle et d’un talent unique. Cette vieille baraque était pour Charles Trenet la source de toutes les inspirations. L’enfance et les souvenirs dans cette Douce France provinciale, près de La Mer, bercée par La Tramontane, sont toujours présents, ici à Narbonne charmante et bonne, son amie de toujours, sa ville à laquelle il était resté Fidèle. Grâce à une scénographie originale, les documents d’archives et interactifs vous feront partager l’incroyable gaieté du Fou chantant.</p><img src='assets/Images/mct.jpg'/>.");


             // Third Marrker

             var sportIcon = L.icon({
   			 iconUrl: 'assets/Images/st.png',
   			 iconSize: [80, 80],
   			 iconAnchor: [0, 45],
   			 popupAnchor: [22.5, -45],
 			 });

		var marker3 = L.marker([43.181377 ,  3.019245],{icon:sportIcon}).addTo(mymap);
		marker3.bindPopup("<p>Il constitue depuis son ouverture en 1976 et sa réhabilitation en 1992, un des équipements incontournables de Narbonne Fréquenté annuellement par des milliers de narbonnaises et de narbonnais, il est avant tout un grand espace vert public.</p><img src='assets/Images/m.jpg'/>.");

		    // Fourth Marker

		     var sportIcon = L.icon({
   			 iconUrl: 'assets/Images/m.png',
   			 iconSize: [75, 75],
   			 iconAnchor: [0, 45],
   			 popupAnchor: [22.5, -45],
 			 });

		var marker4 = L.marker([43.185589 , 3.004696],{icon:sportIcon}).addTo(mymap);
		marker4.bindPopup("<p>L'ancien Palais des Archevêques, forme, avec le cloître gothique et la cathédrale Saint-Just et Saint-Pasteur, un ensemble monumental unique, à la fois résidence et forteresse, à l’image du palais des papes en Avignon.</p><img src='assets/Images/h.jpg'/>");

		   // Fifth Marker 

		   var sportIcon = L.icon({
   			 iconUrl: 'assets/Images/cth.png',
   			 iconSize: [65, 65],
   			 iconAnchor: [0, 45],
   			 popupAnchor: [22.5, -45],
 			 });

		var marker5 = L.marker([43.184791 ,  3.003924 ],{icon:sportIcon}).addTo(mymap);
		marker5.bindPopup("<p>De style gothique rayonnant directement inspiré des grandes cathédrales du Nord de la France, la cathédrale St-Just-et-St-Pasteur se singularise par son unique choeur, dont les voûtes s’élèvent à plus de 40 mètres de haut.</p><img src='assets/Images/ca.jpg'/>.");
              // sixth Marker

               var sportIcon = L.icon({
   			 iconUrl: 'assets/Images/li.jpg',
   			 iconSize: [65, 65],
   			 iconAnchor: [0, 45],
   			 popupAnchor: [22.5, -45],
 			 });
		var marker6 = L.marker([43.18527767545014 ,  3.0002760887145996 ],{icon:sportIcon}).addTo(mymap);
		marker6.bindPopup("<p>Située au centre-ville de Narbonne, la Médiathèque du Grand Narbonne est ouverte au public 42 heures par semaine et vous propose plus de 190 000 documents (livres, magazines, CD, DVD, Blu-Ray,…), de nombreux espaces de consultation et une grande diversité d’animations.</p><img src='assets/Images/m.jpg'/>.");


			var popup = L.popup();

			function onMapClick(e) {
    		popup
       		 .setLatLng(e.latlng)
       		 .setContent("You clicked the map at " + e.latlng.toString())
       		 .openOn(mymap);
		}

			mymap.on('click', onMapClick);

			

			
			}