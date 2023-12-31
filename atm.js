// ATM (Automated Teller Machine)

let input = require("readline-sync");
console.log("\n\n\n     🏧                    Hello welcome to our ATM machine!     🏧 \n")
let card = input.question("Please enter your card 💳💳\n\nDo you want to continue  \n\n1.Yes   ✔️\n2.No   ❌\n\nSelelct any option :-  ")
if (card == 1) {
    console.log("\nWelcome");
    let lang = input.questionInt("\n\nPlease select your language  \n\n1.English\n2.Hindi\n\nSelect language   :-  ");
    if (lang == 1) {
        console.log("Thanks for choosing your English language ok lets go !!!   🥳\n\n");
        let pin = input.questionInt("Please enter your 5 digit ATM pin   :-  ");
        var pol = 12345
        let am = 10000
        if (pin == pol) {
            console.log("Welcome to your account\n\nWhat do you want to do :-   \n\n1.Widraw\n2.Balance Enqueri\n3.Cash Deposit\n\n");
            let wid = input.question("Choose any option :- ")
            if (wid == "1") {
                let amoun = input.questionInt("PLaese enter your widraw amount :-  ");
                if (amoun <= am) {
                    let a = am - amoun
                    console.log(amoun, "is debited from your account")
                    console.log(a, "is your total balance Thanks........... Have a nice day!!!!    🌄")
                } else {
                    console.log("You entered invalid amount   ❌")
                }
            } else if (wid == "2") {
                console.log(am, "is your total balance Thanks.......... Have a nice day!!!!   🌄")
            } else if (wid == "3") {
                let dep = input.questionInt("PLaese enter your Deposit amount :-  ");
                let b = am + dep
                console.log(dep, "Your deposited amount")
                console.log(b, "is your total balance Thanks.......... Have a nice day!!!!   🌄")
            } else {
                console.log("You choosed invalid option please try again")
            }
        } else {
            console.log("Invalid PIN");
        }

    } else if (lang == 2) {
        console.log("Dhanyawad aapne hindi bhasha ka chayan kiya hai ");
        let pin = input.questionInt("\n\nKripaya apne 5 anko wala ATM ka surksha code dalen   :-  ");
        var pol = 12345
        let am = 10000
        if (pin == pol) {
            console.log("Dhanyawad aapne apne account ko safalta purvak khol liya hai\n\nAap kya chahte hai  :-   \n\n1.Nikasi\n2.Rashi Punchhtachh\n3.Nagdi/Check Jama\n\n");
            let wid = input.question("Kisi ek ka chayan kijiye :- ")
            if (wid == "1") {
                let amoun = input.questionInt("Kripaya nikashi rashi batayen  :-  ");
                if (amoun <= am) {
                    let a = am - amoun
                    console.log("Appne apne khate se", amoun, "rupaye ki nikashi ki hai Dhanyawad")
                    console.log("Apki kul rashi", a, " hi bachi hai........... Aapka din shubh ho!!!!    🌄")
                } else {
                    console.log("Aapne galat rashi bhara hai aapke khate me itna rashi nahi hai   ❌")
                }
            } else if (wid == "2") {
                console.log(am, "Aapka pura rashi itna hai .......... Aapka din shubh ho!!!!   🌄")
            } else if (wid == "3") {
                let dep = input.questionInt("Kripaya apna jama rashi yaha bharen :-  ");
                let b = am + dep
                console.log(dep, " aapne jama kiya hai")
                console.log(b, "Aapki puri rashi hai..........Aapka din shubh ho!!!!   🌄")
            } else {
                console.log("Aapne galat chayan kiya hai kripaya fir se prayas karen...")
            }
        } else {
            console.log("Invalid PIN");
        }
    }

} else if (card == 2) {
    console.log("OK Thanks Bye!");
} else {
    console.log("You choosed Invalid option please try again");
}
