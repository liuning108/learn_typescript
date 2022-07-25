
import inquirer from 'inquirer';

inquirer.prompt(
    [
        {
             name: "first_name",
            message: "what is your name ?2 "

        } ]

).then((answers: { first_name: any; }) => {
    console.log(`you answered : ${answers.first_name}`);

});
