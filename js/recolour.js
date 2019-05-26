/*
 * recolour v1.0 - http://www.thomasmichaelwallace.co.uk
 * 
 * provides a way of recolouring a website by switching through alternate
 * stylesheets on command.
 *
 * TERMS OF USE - recolour
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2012 Thomas Michael Wallace
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to
 * endorse or promote products derived from this software without specific prior
 * written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE 
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE. 
 *
*/

var colour_sheets=[]
var current_sheet_no=-1

function getColours(){
	// get the loaded colour sheets
	
	var sheet_link, i

	// learn colour sheet names from html head
	for(i=0; (sheet_link=document.getElementsByTagName("link")[i]); i++) {
	
		if(sheet_link.getAttribute("rel").toLowerCase()=="alternate stylesheet")
		{
			// capture all colour style sheets
			sheet_link.disabled = true;
			colour_sheets.push(sheet_link);
			
		}
	}
}


function setColour(){
	// re-colour site
	
	var new_sheet_no

	// prevent colision with current sheet
	do
	{
		var new_sheet_no=Math.floor(Math.random()*colour_sheets.length);
	}
	while(new_sheet_no==current_sheet_no);
	
	
	// swap sheets
	colour_sheets[current_sheet_no].disabled=true;
	colour_sheets[new_sheet_no].disabled=false;
	
	// update tracker
	current_sheet_no=new_sheet_no;
	
}
	
// initialise on first run
getColours();
current_sheet_no=Math.floor(Math.random()*colour_sheets.length);
setColour();
