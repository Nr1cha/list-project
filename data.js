var book = {
    Chapters: [
        {
            title: "Path of the PC Tech",
            summary: "TestOne"
        }, {
            title: "Operational Procedures",
            summary: "TestTwo"
        },
        {
            title: "The Visible Computer",
            summary: "TestThree"
        },
        {
            title: "Microprocessors",
            summary: ""
        },
        {
            title: "RAM",
            summary: ""
        },
        {
            title: "BIOS",
            summary: ""

        },
        {
            title: "Motherboards",
            summary: ""
        },
        {
            title: "Power Supplies",
            summary: ""
        },
        {
            title: "Hard drive Technologies",
            summary: ""
        },
        {
            title: "Implementing Hard drives",
            summary: ""
        },
        {
            title: "Essential Peripherals",
            summary: ""
        },
        {
            title: "Building a PC",
            summary: ""
        },
        {
            title: "Windows under the hood",
            summary: ""
        },
        {
            title: "Users, Groups and Permissions",
            summary: ""
        },
        {
            title: "Maintaining and Optimizing OS's",
            summary: ""
        },
        {
            title: "Working with the Command line interface",
            summary: ""
        },
        {
            title: "Troubleshooting Operating Systems",
            summary: ""
        },
        {
            title: "Virtualization",
            summary: ""
        },
        {
            title: "Display technologies",
            summary: ""
        },
        {
            title: "Essentials of Networking",
            summary: ""
        },
        {
            title: "Local Area Networking",
            summary: ""
        },
        {
            title: "Wireless Networking",
            summary: ""
        },
        {
            title: "The Internet",
            summary: ""
        },
        {
            title: "Portable Computing",
            summary: ""
        },
        {
            title: "Understanding Mobile Devices",
            summary: ""
        },
        {
            title: "Care and Feeding of Mobile Devices",
            summary: ""
        },
        {
            title: "Printers and Multifunction Devices",
            summary: ""
        },
        {
            title: "Securing Computers",
            summary: ""
        },
    ]
}
book.Chapters.forEach(chapter)

function chapter(chapter, index) {
    document.getElementById("test").innerHTML += "Chapter " + (index + 1) + ": " + chapter.title + "<br>" + "Summary" + ":" + "<br>"
}
console.log(book.Chapters[20].title);


// function Chapter(title, content){
//     this.title = title 
//     this.content = content
// }