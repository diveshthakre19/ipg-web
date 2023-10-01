<?php
$url_components = parse_url($_SERVER['REQUEST_URI']);
parse_str($url_components['query'], $params);
$jsonObj = array();
 $to = $params['to'];
 $subject = $params['mailHeading'];
 $message = "<b>Enquiry</b>";
 $message .= "<p>Name:-".$params['name']."</p></br>";
 $message .= "<p>Email:-".$params['email']."</p></br>";
 $message .= "<p>Mobile Number:-".$params['mobile']."</p></br>";
 $message .= "<p>From Location".$params['fromLocation']."</p></br>";
 $message .= "<p>To Location".$params['toLocation']."</p></br>";
 $message .= "<p>Shifting Type:-".$params['type']."</p></br>";
 $message .= "<p>Shifting Date".$params['date']."</p></br>";
 $header = "From:".$params['emailCompany']." \r\n";
 $header .= "MIME-Version: 1.0\r\n";
 $header .= "Content-type: text/html\r\n";
 $retval = mail ($to,$subject,$message,$header);
 if( $retval == true ) {
    $jsonObj = json_encode(array(
        "Series" => "Successfully Send Mail",
        "status" => true,
    ));
    header("HTTP/1.1 200 OK");
    $set->response = $jsonObj;
    $set->message = 'All Data';
    $set->success = true;
 }else {
    $jsonObj = json_encode(array(
        "Series" => "Somthing is wrong please try on call and WhatsApp",
        "status" => true,
    ));
    header("HTTP/1.1 200 OK");
    $set->response = $jsonObj;
    $set->message = 'All Data';
    $set->success = true;
 }
 echo $val = str_replace('\\/', '/', json_encode($set, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));


 //Heading: https://api.owntechy.in/mail/mail.php?to=info@indianpackersgroup.com&mailHeading=IPG Packers&name:demo&email=kishangopal842@gmail.com&fromLocation=Ajmer&toLocation=Jaipur&type=shifting&date=12-12-2023&emailCompany=kishangopal842@gmail.com
 //to=info@indianpackersgroup.com
 //mailHeading=IPG Packers
 //name:demo
 //email=
 //mobile=
 //fromLocation=
 //toLocation=
 //type=
 //date=
 //emailCompany=
