#!/usr/bin/env node
"use strict";

import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';
import clear from 'clear';
import open from 'open';
import terminalImage from 'terminal-image';
import got from 'got';


//const boxen = require("boxen");
//const chalk = require("chalk");
//const inquirer = require("inquirer");
//const clear = require("clear");
//const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:dimitri.leduc87@gmail.com");
                    console.log("\nDone, see you soon.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Good Bye!\n");
                }
            }
        ]
    }
];

// Data for the card
const data = {
    name: chalk.bold.green("        Dimitri Leduc"),
    work: `${chalk.white("Student FrontEnd Developer at ")} ${chalk
        .hex("#2b82b2")
        .bold("BeCode")}`,
    
    
    github: chalk.gray("https://github.com/") + chalk.green("dimitrileduc"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("dimitri-leduc-28506596"),
    
    npx: chalk.red("npx") + " " + chalk.white("dimitrileduc"),

    labelWork: chalk.white.bold("       Work:"),
    
    
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        
       
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "I'm freelance web developer focused on graphic and visual experience."
        )}`,
        `${chalk.italic("I feel happy when drinking an European beer while listening")}`,
        `${chalk.italic("music around 100bpm.")}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);



// Print the card
console.log(me);

// Optional tip to help users use the links
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");

// Show the tip 
console.log(tip);

// Ask the Inquirer questions. 
prompt(questions).then(answer => answer.action());