<!DOCTYPE html>
<html>
    <head>
        <title>Payment form</title>
        <link rel="stylesheet" href="/storage/62FE-9A3C/HTML/Payment Form.css" type="text/css" />
    </head>
    <body>
    	<div class="container">
        <form action=" ">
        <h1 class="main-heading">Payment form</h1>
        All required fields are marked by *
        <!-- contact information -->
        <h2>Contact Information</h2>
            <p>Name: *<input type="text" name="name" placeholder="Name" required></p>
            <fieldset>
                <legend>Gender *</legend>
                <p><input type="radio" name="gender" required>Male<br/> <input type="radio" name="gender" required>Female <br /><input type="radio" name="gender" required>Other
            </fieldset>
            <p>Adress:<textarea class="adress" name="adress" id="adress"placeholder= "Type your Address"></textarea></p>
            <p>Email: *<input type="email" name="email" placeholder="abc@gmail.com" required></p>
            <p>Pincode: *<input type="number" name="pincode" required></p>
            <h2>Payment Information</h2>
            <p>Card type : *<select>
                <option value="">---Select a card type---</option>
                <option value="visa">Visa</option>
                <option value="rupay">Rupay</option>
                <option value="mastercard">Mastercard</option>
            </select></p>
            <p>
                Card Number : *<input type="number" name="card_number" id="car_num" placeholder="4653-6475-5757" required>
            </p>
            <p>
                Expiry Date : *<input type="date" name="exp_dat" id="exp_dat"  required>
            </p>
            <p>
                CVV *<input type="password"  id="cvv" name="cvv" placeholder="00/00" required>
            </p>
            <input type="submit" value="Pay now">
        </form>
        </div>
    </body>
</html>
