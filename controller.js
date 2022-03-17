/* This file contains all the controller logic sitting between the
   backend and the front end.
 */

var IMAGES = {
    circle: "example-images/circle.png",
    eagle: "example-images/eagle.png",
    preview: "example-images/preview.png"
};

var TEXT = {
    lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eros lacus, cursus sit amet tortor sed, lobortis sagittis lectus. Fusce bibendum vel mauris id elementum. Phasellus sed euismod magna, semper dictum diam. Aenean imperdiet turpis blandit nulla gravida, in faucibus justo suscipit. Sed malesuada at leo ac euismod. Donec sit amet quam nec risus tempor sagittis sit amet et tellus. Quisque quam sem, molestie vitae varius eget, vestibulum non lacus. Nulla semper, libero a maximus egestas, odio mi lobortis eros, eu varius enim orci sit amet magna. Praesent tincidunt ultricies ultrices. Sed vestibulum orci facilisis nibh fermentum posuere. Sed volutpat lacus ut convallis aliquam. Donec eros nisl, tincidunt nec lectus id, aliquet tempus odio. Suspendisse vitae sodales dui. Praesent nec blandit tellus. Nunc consequat vulputate ipsum, in maximus sapien eleifend quis. Mauris scelerisque erat sit amet risus consectetur, ut laoreet elit fermentum. Quisque id malesuada sem, non congue orci. In sed rutrum felis. Ut non nunc eleifend, gravida metus at, facilisis tellus. Nunc mattis, velit vitae vulputate pharetra, mauris odio posuere leo, id vulputate erat tellus nec purus. Aenean at molestie mi, eget convallis urna. Donec ac consequat elit. Vivamus lobortis vel risus in vulputate. Maecenas fringilla pharetra dictum. Mauris varius mi sit amet sagittis imperdiet. Quisque quis varius tortor. Pellentesque a augue at lacus finibus cursus. Vestibulum quis lorem id diam volutpat dictum eu non magna. Nulla nec pulvinar lectus, non accumsan elit. Proin vehicula consequat elit vel mattis. In non elit placerat, interdum mauris vel, tristique tellus. Nullam lorem turpis, rutrum sed nibh sed, sagittis mattis ante. Cras tempus semper maximus. Ut tristique dolor vel gravida cursus. Integer vel interdum risus. Mauris sed urna sit amet quam convallis vulputate sed vel erat. Mauris malesuada ante nunc. Duis maximus at tellus ac ultrices. Proin ac est in enim auctor laoreet. Fusce viverra quis tellus tempus tempus.In ac gravida sem, quis imperdiet sem. Praesent ac magna et neque gravida luctus. Nullam commodo nibh in risus pellentesque fringilla. Suspendisse interdum ac urna in pretium. Donec sed blandit est. Ut lacinia dictum consectetur. Pellentesque consequat fermentum erat, quis venenatis orci ultrices ut. Nam maximus pellentesque ipsum, quis euismod tellus cursus eu. Donec finibus diam erat, eu pretium mi sodales in. Phasellus lacus nunc, fringilla lacinia mi vel, varius ultricies ex. Curabitur pretium quam et risus consectetur, eget rhoncus ex placerat. Suspendisse consectetur id magna vel euismod. Duis cursus, nibh ac iaculis mattis, ex sapien elementum massa, at pulvinar leo quam finibus purus. Pellentesque aliquam et lacus eu placerat. Donec sit amet ultricies neque. Sed nec luctus nulla, at dignissim felis. Fusce vitae vulputate eros, quis interdum urna. Praesent viverra ullamcorper massa.",
    declaration: "The unanimous Declaration of the thirteen united States of America, When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation. We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, --That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government, laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence, indeed, will dictate that Governments long established should not be changed for light and transient causes; and accordingly all experience hath shewn, that mankind are more disposed to suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty, to throw off such Government, and to provide new Guards for their future security.--Such has been the patient sufferance of these Colonies; and such is now the necessity which constrains them to alter their former Systems of Government. The history of the present King of Great Britain is a history of repeated injuries and usurpations, all having in direct object the establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a candid world. He has refused his Assent to Laws, the most wholesome and necessary for the public good. He has forbidden his Governors to pass Laws of immediate and pressing importance, unless suspended in their operation till his Assent should be obtained; and when so suspended, he has utterly neglected to attend to them. He has refused to pass other Laws for the accommodation of large districts of people, unless those people would relinquish the right of Representation in the Legislature, a right inestimable to them and formidable to tyrants only. He has called together legislative bodies at places unusual, uncomfortable, and distant from the depository of their public Records, for the sole purpose of fatiguing them into compliance with his measures. He has dissolved Representative Houses repeatedly, for opposing with manly firmness his invasions on the rights of the people. He has refused for a long time, after such dissolutions, to cause others to be elected; whereby the Legislative powers, incapable of Annihilation, have returned to the People at large for their exercise; the State remaining in the mean time exposed to all the dangers of invasion from without, and convulsions within. He has endeavoured to prevent the population of these States; for that purpose obstructing the Laws for Naturalization of Foreigners; refusing to pass others to encourage their migrations hither, and raising the conditions of new Appropriations of Lands. He has obstructed the Administration of Justice, by refusing his Assent to Laws for establishing Judiciary powers. He has made Judges dependent on his Will alone, for the tenure of their offices, and the amount and payment of their salaries. He has erected a multitude of New Offices, and sent hither swarms of Officers to harrass our people, and eat out their substance. He has kept among us, in times of peace, Standing Armies without the Consent of our legislatures. He has affected to render the Military independent of and superior to the Civil power. He has combined with others to subject us to a jurisdiction foreign to our constitution, and unacknowledged by our laws; giving his Assent to their Acts of pretended Legislation: For Quartering large bodies of armed troops among us: For protecting them, by a mock Trial, from punishment for any Murders which they should commit on the Inhabitants of these States: For cutting off our Trade with all parts of the world: For imposing Taxes on us without our Consent: For depriving us in many cases, of the benefits of Trial by Jury: For transporting us beyond Seas to be tried for pretended offences For abolishing the free System of English Laws in a neighbouring Province, establishing therein an Arbitrary government, and enlarging its Boundaries so as to render it at once an example and fit instrument for introducing the same absolute rule into these Colonies: For taking away our Charters, abolishing our most valuable Laws, and altering fundamentally the Forms of our Governments: For suspending our own Legislatures, and declaring themselves invested with power to legislate for us in all cases whatsoever. He has abdicated Government here, by declaring us out of his Protection and waging War against us. He has plundered our seas, ravaged our Coasts, burnt our towns, and destroyed the lives of our people. He is at this time transporting large Armies of foreign Mercenaries to compleat the works of death, desolation and tyranny, already begun with circumstances of Cruelty & perfidy scarcely paralleled in the most barbarous ages, and totally unworthy the Head of a civilized nation. He has constrained our fellow Citizens taken Captive on the high Seas to bear Arms against their Country, to become the executioners of their friends and Brethren, or to fall themselves by their Hands. He has excited domestic insurrections amongst us, and has endeavoured to bring on the inhabitants of our frontiers, the merciless Indian Savages, whose known rule of warfare, is an undistinguished destruction of all ages, sexes and conditions. In every stage of these Oppressions We have Petitioned for Redress in the most humble terms: Our repeated Petitions have been answered only by repeated injury. A Prince whose character is thus marked by every act which may define a Tyrant, is unfit to be the ruler of a free people. Nor have We been wanting in attentions to our Brittish brethren. We have warned them from time to time of attempts by their legislature to extend an unwarrantable jurisdiction over us. We have reminded them of the circumstances of our emigration and settlement here. We have appealed to their native justice and magnanimity, and we have conjured them by the ties of our common kindred to disavow these usurpations, which, would inevitably interrupt our connections and correspondence. They too have been deaf to the voice of justice and of consanguinity. We must, therefore, acquiesce in the necessity, which denounces our Separation, and hold them, as we hold the rest of mankind, Enemies in War, in Peace Friends. We, therefore, the Representatives of the united States of America, in General Congress, Assembled, appealing to the Supreme Judge of the world for the rectitude of our intentions, do, in the Name, and by Authority of the good People of these Colonies, solemnly publish and declare, That these United Colonies are, and of Right ought to be Free and Independent States; that they are Absolved from all Allegiance to the British Crown, and that all political connection between them and the State of Great Britain, is and ought to be totally dissolved; and that as Free and Independent States, they have full Power to levy War, conclude Peace, contract Alliances, establish Commerce, and to do all other Acts and Things which Independent States may of right do. And for the support of this Declaration, with a firm reliance on the protection of divine Providence, we mutually pledge to each other our Lives, our Fortunes and our sacred Honor."
};

var usertext = ""; // text user types will be saved here
var usertextSaved = false;
var userimg = null;
var noImageSelected = true;

/* Called via the generate button in the UI. */
function generateText() {
    if (noImageSelected) {
        alert("please upload an image or select an example image.");
    } else {
        /* get all settings */
        var height = parseInt(document.getElementById("height").value);
        var width = parseInt(document.getElementById("width").value);
        var keepSpaces= document.getElementById("keepSpaces").checked;

        /* get the text */
        var text = document.getElementById("textinput").value;

        /* get the selected image */
        var selectedImg = document.getElementById("imgPreview");

        /* create a new image element to put on the canvas*/
        var img = new Image();
        img.src = selectedImg.src;

        /* makes sure the image is loaded before doing anything with it */
        img.onload = function() {
            var matrix = getMatrix(width, height, img);
            var output = formatText(matrix, text, keepSpaces);
            document.getElementById("output").innerText = output;
        };
    }

}

/* Called by radio buttons over text box. Loads example text
*  or saved user text. */
function setText(name) {
    var textarea = document.getElementById("textinput");

    /* if user is clicking off of user, save the text */
    if (usertextSaved !== true) {
        usertext = textarea.value;
        usertextSaved = true;
    }

    /* load the appropriate text */
    if (name === "user") {
        textarea.value = usertext;
        usertextSaved = false;
    } else if (name === "lorem") {
        textarea.value = TEXT.lorem;
    } else if (name === "declaration") {
        textarea.value = TEXT.declaration;
    }
}

/* called from the ondrop event handler, when a user uploads an image. */
function setUserImage(file) {
    var img = document.getElementById("imgPreview");
    var url = URL.createObjectURL(file);
    img.src = url;
    userimg = url;

    document.getElementById("userRadioImg").checked = true;
}

/* Called from the radio buttons above the preview image. */
function setPreviewImg(imgName) {
    noImageSelected = false;

    var imgTag = document.getElementById("imgPreview");
    if (imgName === "circle") {
        imgTag.src = IMAGES.circle;
    } else if (imgName === "eagle") {
        imgTag.src = IMAGES.eagle;
    } else if (imgName === "user") {
        if (userimg === null) {
            imgTag.src = IMAGES.preview;
            noImageSelected = true;
        } else {
            imgTag.src = userimg;
        }
    }
}

document.ondragover = function(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
};

document.ondrop = function(event) {
    event.preventDefault();

    var files = event.dataTransfer.files;
    setUserImage(files[0]);
};