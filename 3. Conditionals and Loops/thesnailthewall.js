function main() {
    let depth = parseInt(readLine(), 10);
    //your code goes here

    let climb = 7;
    let slip = 2;
    let day = 0;
    for(let workdone = 0;workdone <= depth;) {
        day = day + 1;
        workdone=workdone+climb;
        if(workdone>=depth){
            break;
        }
        workdone = workdone - slip;

    }
    console.log(day);
}