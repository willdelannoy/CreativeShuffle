const prompts = [
    "What could a customer substitute for your product, outside of the category?",
    "What's odd about how people interact with this?",
    "If this brand had a side hustle, what would it be?",
    "If the brand threw a party, who would be there?",
    "How was it done before the internet?",
    "Team up with an enemy",
    "Who buys this for others? Why?",
    "Search How to ______ on YouTube. Interrogate",
    "How would it show up on a sitcom like The Office?",
    "Find the opposite pole",
    "What Venn Diagram does this sit at the center of?",
    "Start inside rather than outside",
    "Let go of something that feels sacred",
    "Who else has solved a challenge like this?",
    "How does this relate to the headlines on NYTimes.com today?",
    "What would the fans do if they ran the business?",
    "Ask ChatGPT",
    "Find a meditative distraction",
    "If you knew they would answer, who would you call for help?",
    "Solve it without words",
    "Trade opinions and argue against your own",
    "How would our competitors do it? (Brands, Agencies, etc)",
    "What would work but seems impossible to do?",
    "Whose shoulders could we stand on?",
    "Discover the recipes you are using and abandon them",
    "Change nothing and continue with immaculate consistency",
    "How would you really know if it works?",
    "Be extravagant",
    "How would a kid do it?",
    "If you had to solve this by tomorrow, what would you do?",
    "Who would be sad if the brand or product disappeared?",
    "What is the biggest sales channel? The most loved?",
    "What is surprising about how people use this category?",
    "Is there a problem beyond apathy?",
    "How does nostalgia play in?",
    "Has it been done before?",
    "Does where or when matter?",
    "Who would never use or care about this?",
    "Is there emerging technology that could help?",
    "How does social media play in?",
    "What other category could we act like?",
    "How would Richard Branson do it?",
    "Who could sell it for you?",
    "Breathe new life into an old idea",
    "Film an ad right now, with only what’s around you",
    "Put things in order of importance",
    "Ask someone unqualified to answer the question",
    "What would a stand up comedian say about this?",
    "Who is the hero of this story? The villain?",
    "How would an engineer solve this?",
    "Who is truly influential in this purchase or experience?",
    "What would the most cliché answer be?",
    "When does our brand or product matter most?",
    "If we do nothing, why will we not be successful?",
    "What if we had to launch today?",
    "Who would you trust to do this on your behalf?",
    "What is the most extreme path forward?",
    "Who already does this poorly? Interrogate why",
    "Ask yourself why the problem persists. Ask 'why?' of that answer. Repeat 7x.",
    "How would you do it with no budget?",
    "What is the hardest part?",
    "How would Disney do it?",
    "What talents could solving this call for?",
    "What song does this call to mind? Go watch the video",
    "Find a wave to ride",
    "What events should we attend?",
    "What makes super users of this interesting?",
    "Explain the problem as if you are talking to an old friend",
    "What do people post under the brand hashtag?",
    "Substitute something",
    "What is the biggest canvas that is right for this? The smallest?",
    "How can we make the problem into an advantage?",
    "If we knew we could not fail, what would we do?",
    "Do something boring",
    "How would an IKEA instruction book describe this?",
    "Invent a character as the ideal spokesperson",
    "Tell the story of this product or brand in reverse",
    "Phone a friend",
    "How could this make someone smile? Cry? Scream?",
    "Is there a ritual or ceremony to this?",
    "Try faking it!",
    "Make it more warm, friendly and inviting",
    "Find the perfect snack to refuel",
    "Solve it with a song",
    "Start a conspiracy theory that could explain the problem",
    "Write a bad idea. Improve it. Keep going.",
    "How will this be solved 10 years into the future?",
    "Think about the product and start scribbling on a page until you see something form.",
    "How does this uniquely impact each of our senses?",
    "Is there a role for scarcity or things available only for a limited time?",
    "How could we gamify this?",
    "How can we incorporate the principles of social justice?",
    "Is there a role for being intentionally imperfect?",
    "Find the universal in the specific; what niche could we tap into?",
    "Make an exhaustive list of everything you might do… and do the last one",
    "How would the brand or product behave in zero gravity?",
    "What would an extremely simplified or intentionally complicated version look like?",
    "What would this brand bring to a deserted island?",
    "Diagram the challenge. What does it look like?",
    "What myth or legend could be associated with this?",
    "What is unique about how people in this market use us?",
    "How could we transform the brand into a fashion statement?",
    "If the brand was banned, how would we secretly communicate about it?",
    "If the brand was a religion, what would be its tenets?",
    "Where is this absolutely essential?",
    "What is the most outrageous partnership we could make?",
    "Precisely define the jobs to be done",
    "Leverage the long tail",
    "What is the most controversial yet positive thing we could do?",
    "What is the most unconventional journey someone could take to this brand?",
    "What do only the most loyal customers know about this?",
    "What would be the most effective celebrity endorsement?",
    “What’s the unseen threat?”,
    “What’s the biggest barrier to purchase?”,
    “Who are we not talking to?”

];

function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let currentIndex = 0;

const textElement = document.getElementById('text');
const buttonElement = document.getElementById('start');
const bodyElement = document.querySelector('body');

function nextLine() {
    textElement.innerText = prompts[currentIndex];
    currentIndex = (currentIndex + 1) % prompts.length;
}

window.onload = function() {
    shuffleArray(prompts); // shuffle the prompts on page load
    buttonElement.onclick = function() {
        document.getElementById('overlay').style.display = 'none';
        nextLine();
    };

    bodyElement.onclick = function() {
        nextLine();
    };
};
