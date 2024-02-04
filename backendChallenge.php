<?php 
$ch = curl_init('https://coderbyte.com/api/challenges/json/age-counting');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 0);
$data = curl_exec($ch);
curl_close($ch);

//print_r(json_decode($data, true));
$arr = json_decode($data, true);
$items = explode(', ', $arr['data']);
$count = 0;

foreach ($items as $item){
 //print_r($item . PHP_EOL);
 if(str_starts_with($item,'age=')===true){
   $age = explode('=',$item)[1];
   if($age >= 50)
     $count++;
   }
}

print_r($count);
?>̥
