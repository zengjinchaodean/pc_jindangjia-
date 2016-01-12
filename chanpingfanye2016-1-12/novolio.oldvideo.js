
function videoLoad(videoUrl,localVideo){
	if(device.ios()){
		var embed = document.createElement("embed");
		embed.src = videoUrl;
		embed.setAttribute("frameborder","0");
		embed.setAttribute("width","100%");
		embed.setAttribute("height","210");
		embed.setAttribute("allowfullscreen","true");
		localVideo.appendChild(embed);
	}
	else{
		var iframe = document.createElement("iframe");
		iframe.src = videoUrl;
		iframe.setAttribute("frameborder","0");
		iframe.setAttribute("width","100%");
		iframe.setAttribute("height","210");
		iframe.setAttribute("allowfullscreen","true");
		localVideo.appendChild(iframe);
	}
}