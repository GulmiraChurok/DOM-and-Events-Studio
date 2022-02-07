// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    console.log('window loaded');
    let miles = 0; 
    const takeOffButton = document.getElementById ("takeoff"); 
    console.log(takeOffButton); 
    takeOffButton.addEventListener("click", event => {
    let response = this.window.confirm("Confirm that the shuttle is ready for takeoff.")
    if(response){
        let flightStatus = document.querySelector('#flightStatus');
        flightStatus.innerHTML = "<p>Shuttle in flight.<\p>";
        shuttleBackground.style.backgroundColor = "blue";
        miles = 10000; 
        spaceShuttleHeight.innerHTML = miles; 
    }; 
    });
    const landButton = document.getElementById("landing"); 
    landButton.addEventListener('click', event => {
        window.alert("The shuttle is landing. Landing gear engaged."); 
        flightStatus.innerHTML = "The shuttle has landed."; 
        shuttleBackground.style.backgroundColor = "green";
        miles = 0; 
        spaceShuttleHeight.innerHTML = miles;
    });
    const abortButton = document.getElementById("missionAbort");
    abortButton.addEventListener('click', event => {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if(response){
            flightStatus.innerHTML = "Mission aborted."; 
            shuttleBackground.style.backgroundColor = "green";
            miles = 0; 
            spaceShuttleHeight.innerHTML = miles;
        }
    });
    const up = document.getElementById("upButton");
    up.addEventListener('click', event => {
        //rocket.position = rocket.position + 10; 
        miles = miles + 10000; 
        spaceShuttleHeight.innerHTML = miles; 
    })
    const down = document.getElementById("downButton");
    down.addEventListener('click', event => {
        //rocket.position = rocket.position - 10; 
        miles = miles - 10000; 
        if(miles < 0){
            miles = 0;
        }
        spaceShuttleHeight.innerHTML = miles; 
        
    })
    
});
