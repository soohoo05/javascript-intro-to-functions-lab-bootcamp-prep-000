function shout (string){
 return string.toUpperCase();

}

whisper(string){
  return string.toLowerCase();
}

logShout(string){
  console.log(string.toUpperCase());
}

logWhisper(string){
  console.log(string.toLowerCase());
}

sayHiToGrandma(string){
  if(string.toUpperCase()==string){
    return 'YES INDEED!';
  }
  else if (string== "I love you, Granda."){
    return 'I love you, too';
  }
}