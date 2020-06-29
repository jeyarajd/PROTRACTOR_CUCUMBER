import { $, ElementFinder } from "protractor";

export class SearchPageObject {
    public searchTextBox: ElementFinder;
    public searchButton: ElementFinder;
    public logo: ElementFinder;

    constructor() {
        this.searchTextBox = $("input[title='Search']");
        this.searchButton = $("div[class='FPdoLc tfB0Bf']>center>input[value='Google Search']");
        this.logo = $("div.logo img"); 
    }
}