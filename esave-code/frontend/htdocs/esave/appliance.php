<?php require_once('header.php') ;
if($_POST)
{
 $nop=$_POST["nop"];
 $enp=$_POST["enp"];
 session_start();
 $_SESSION["nop"]=$nop;
  $_SESSION["enp"]=$enp;
}

?>

<center>
<form action="calculate.php" method="POST">
 <div data-role="collapsible-set">
      <div data-role="collapsible" data-collapsed="true">
        <h3>Building Design</h3>
 <label for="nofag">Stories above ground level :</label>
 <div data-role="fieldcontain">
            <select name="nofag" id="nofag" data-mini="true">
			<option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
		 </div>
 <label for="area">Total Area:<small>(in sqft's)</small></label>
            <input type="number" name="area" id="area" data-mini="true" required/>
     </div>
	    <div data-role="collapsible" data-collapsed="true">
        <h3>Appliance Information</h3>
			
<div data-role="fieldcontain">
    <fieldset data-role="controlgroup">
    	<legend>Clothes Washer:</legend>
         	<input type="radio" name="washer" id="radio-choice-1" value="yes"/>
         	<label for="radio-choice-1">Yes</label>

         	<input type="radio" name="washer" id="radio-choice-2" value="no"  />
         	<label for="radio-choice-2">No</label>
    </fieldset>
</div>
<div data-role="fieldcontain">
<label for="fridge">Refrigerator:</label>
			<select name="fridge" id="fridge" data-mini="true">
			<option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="side">side</option>
			<option value="upright">Upright</option>
			<option value="chest">Chest</option>
			</select>
			</div>
<label for="lights">Number of lights:</label>
			<input name="lights" id="lights" type="number" data-mini="true" required/>
			</div>
	  
	   </div>
	   
			<button type="submit">ESTIMATE</button>
			
</form>
</center>
