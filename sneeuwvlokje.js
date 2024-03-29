let inhoud = document.getElementById('uitslag');

class Sneeuwvlokje {

    _svg = '<svg version="1.1" class="vlokje" xmlns="http://www.w3.org/2000/svg" ' +
        'xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  ' +
        'viewBox="0 0 480 480" xml:space="preserve"> ' +
        ' <g> ' +
        ' <line x1="239.5" y1="34.5" x2="240" y2="187"/> ' +
        '<line x1="239.5" y1="119.5" x2="239.5" y2="34.5"/> ' +
        '<line x1="240.5" y1="119.5" x2="300.6" y2="58.9"/> ' +
        '<line x1="239.5" y1="119.5" x2="179.4" y2="59.4"/> ' +
        '<line x1="239" y1="74" x2="210" y2="45"/> ' +
        ' <line x1="282.5" y1="76.8" x2="282.5" y2="56.2"/> ' +
        '<line x1="269" y1="45" x2="240" y2="74"/>  ' +
        '<line x1="254.5" y1="59.8" x2="254.5" y2="39.2"/> ' +
        '<line x1="225.5" y1="60.8" x2="225.5" y2="40.2"/> ' +
        '<line x1="199.5" y1="79.8" x2="199.5" y2="59.2"/> ' +
        '<line x1="303.8" y1="76.5" x2="283.2" y2="76.5"/> ' +
        '<line x1="274.8" y1="60.5" x2="254.2" y2="60.5"/> ' +
        '<line x1="224.8" y1="60.5" x2="204.2" y2="60.5"/> ' +
        '<line x1="198.8" y1="79.5" x2="178.2" y2="79.5"/> ' +
        '<line x1="219.5" y1="99.8" x2="219.5" y2="79.2"/> ' +
        '<line x1="262.5" y1="96.8" x2="262.5" y2="76.2"/> ' +
        '<line x1="283.8" y1="96.5" x2="263.2" y2="96.5"/> ' +
        '<line x1="219.8" y1="99.5" x2="199.2" y2="99.5"/> ' +
        '<line x1="283.8" y1="96.5" x2="263.2" y2="96.5"/> ' +
        '</g> ' +
        '<g> ' +
        ' <line x1="385.1" y1="137.8" x2="240.2" y2="185.4"/> ' +
        '<line x1="304.2" y1="164" x2="385.1" y2="137.8"/> ' +
        '<line x1="304.5" y1="165" x2="380.7" y2="203.4"/> ' +
        ' <line x1="304.2" y1="164" x2="342.8" y2="88.3"/> ' +
        ' <line x1="347.3" y1="149.5" x2="365.9" y2="113"/> ' +
        ' <line x1="358.2" y1="191.7" x2="377.7" y2="185.4"/> ' +
        ' <line x1="384.2" y1="169.1" x2="347.6" y2="150.4"/> ' +
        ' <line x1="365.7" y1="159.8" x2="385.2" y2="153.5"/> ' +
        ' <line x1="355.8" y1="132.6" x2="375.3" y2="126.2"/> ' +
        ' <line x1="329.7" y1="113.7" x2="349.2" y2="107.4"/> ' +
        ' <line x1="365" y1="211.8" x2="358.6" y2="192.3"/> ' +
        '  <line x1="371.2" y1="179.3" x2="364.9" y2="159.8"/> ' +
        '  <line x1="355.8" y1="131.8" x2="349.4" y2="112.3"/> ' +
        '  <line x1="329.7" y1="112.9" x2="323.3" y2="93.4"/> ' +
        '  <line x1="316.8" y1="138.9" x2="336.3" y2="132.6"/> ' +
        '  <line x1="333" y1="178.9" x2="352.5" y2="172.5"/> ' +
        '  <line x1="317.1" y1="139.1" x2="310.8" y2="119.6"/> ' +
        '  <line x1="339.8" y1="199" x2="333.4" y2="179.5"/> ' +
        ' </g> ' +
        ' <g> ' +
        '   <line x1="329.7" y1="309.1" x2="239.7" y2="186"/> ' +
        '  <line x1="279.8" y1="240.3" x2="329.7" y2="309.1"/> ' +
        '  <line x1="279" y1="240.9" x2="266" y2="325.2"/> ' +
        '  <line x1="279.8" y1="240.3" x2="363.7" y2="253.6"/> ' +
        '  <line x1="306.9" y1="276.9" x2="347.4" y2="283.3"/> ' +
        '  <line x1="270.1" y1="300.2" x2="282.2" y2="316.8"/> ' +
        '  <line x1="299.7" y1="317.9" x2="306.1" y2="277.4"/> ' +
        '  <line x1="302.8" y1="297.5" x2="314.8" y2="314.1"/> ' +
        '  <line x1="325.6" y1="279.6" x2="337.7" y2="296.2"/> ' +
        '  <line x1="335.5" y1="249" x2="347.6" y2="265.6"/> ' +
        '  <line x1="253.1" y1="312.9" x2="269.7" y2="300.8"/> ' +
        '  <line x1="285.9" y1="308.8" x2="302.5" y2="296.7"/> ' +
        '  <line x1="326.4" y1="279.4" x2="343" y2="267.3"/> ' +
        '  <line x1="336.3" y1="248.7" x2="352.8" y2="236.7"/> ' +
        '  <line x1="307.6" y1="244.6" x2="319.6" y2="261.1"/> ' +
        '  <line x1="274.5" y1="272.3" x2="286.6" y2="288.8"/> ' +
        '  <line x1="307.5" y1="244.9" x2="324.1" y2="232.9"/> ' +
        '  <line x1="257.5" y1="285" x2="274.1" y2="272.9"/> ' +
        ' </g> ' +
        ' <g> ' +
        '  <line x1="151.5" y1="310.8" x2="240.7" y2="187.1"/> ' +
        '  <line x1="201.5" y1="242" x2="151.5" y2="310.8"/> ' +
        '  <line x1="200.7" y1="241.4" x2="116.5" y2="255.1"/> ' +
        '  <line x1="201.5" y1="242" x2="214.8" y2="326"/> ' +
        '  <line x1="175.1" y1="279.1" x2="181.6" y2="319.6"/> ' +
        '  <line x1="141.6" y1="251.3" x2="129.5" y2="267.9"/> ' +
        '  <line x1="133.8" y1="285" x2="174.3" y2="278.6"/> ' +
        '  <line x1="154.2" y1="281.6" x2="142.2" y2="298.1"/> ' +
        '  <line x1="178.3" y1="297.8" x2="166.2" y2="314.4"/> ' +
        '  <line x1="210.5" y1="297.7" x2="198.4" y2="314.3"/> ' +
        '  <line x1="124.2" y1="239.1" x2="140.8" y2="251.1"/> ' +
        '  <line x1="138.3" y1="269" x2="154.9" y2="281.1"/> ' +
        '  <line x1="178.7" y1="298.4" x2="195.3" y2="310.5"/> ' +
        '  <line x1="210.9" y1="298.3" x2="227.5" y2="310.4"/> ' +
        '  <line x1="206" y1="269.8" x2="194" y2="286.4"/> ' +
        '  <line x1="169.5" y1="246.9" x2="157.4" y2="263.5"/> ' +
        '  <line x1="205.7" y1="269.8" x2="222.3" y2="281.9"/> ' +
        '  <line x1="152.2" y1="234.6" x2="168.7" y2="246.7"/> ' +
        ' </g> ' +
        ' <g> ' +
        '   <line x1="99.8" y1="140" x2="240" y2="186"/> ' +
        '   <line x1="180.6" y1="166.3" x2="99.8" y2="140"/> ' +
        '   <line x1="180.9" y1="165.4" x2="141.9" y2="89.5"/> ' +
        '   <line x1="180.6" y1="166.3" x2="104.9" y2="204.9"/> ' +
        '   <line x1="137.2" y1="152.7" x2="100.7" y2="171.3"/> ' +
        '   <line x1="153.3" y1="112.2" x2="133.8" y2="105.8"/> ' +
        '   <line x1="118.9" y1="115.2" x2="137.5" y2="151.7"/> ' +
        '   <line x1="128.5" y1="133.6" x2="109" y2="127.2"/> ' +
        '   <line x1="120.4" y1="161.4" x2="100.9" y2="155.1"/> ' +
        '   <line x1="130.5" y1="192" x2="111" y2="185.7"/> ' +
        '   <line x1="159.6" y1="91.9" x2="153.3" y2="111.4"/> ' +
        '   <line x1="135.4" y1="114.5" x2="129.1" y2="134"/> ' +
        '   <line x1="120" y1="162.1" x2="113.6" y2="181.6"/> ' +
        '   <line x1="130" y1="192.7" x2="123.6" y2="212.2"/> ' +
        '   <line x1="155.7" y1="179.2" x2="136.2" y2="172.9"/> ' +
        '   <line x1="166.1" y1="137.4" x2="146.6" y2="131.1"/> ' +
        '   <line x1="155.5" y1="178.9" x2="149.2" y2="198.4"/> ' +
        '   <line x1="172.5" y1="117.1" x2="166.1" y2="136.6"/> ' +
        ' </g> ' +
        ' <polygon class=ster points="255,165.2 287.9,170 264.1,193.2 269.7,225.9 240.3,210.4 210.9,225.8 216.5,193.1 192.8,169.9  225.6,165.2 240.3,135.4 "/> ' +
        ' <polygon  class=ster  points="238.9,159.9 268.5,144.8 262.5,177.4 286,200.9 253.1,205.3 238,234.9 223.7,204.9 190.9,199.7 214.9,176.8 209.8,144 "/> '+
        ' </svg>';

    constructor(horizontale, verticale, valsnelheid, grootte, draaisnelheid) {
        this._grootte = grootte;
        this._horizontale = horizontale + inhoud.offsetLeft;
        this._verticale = verticale + inhoud.offsetTop;
        this._valsnelheid = valsnelheid * grootte;
        this._draaisnelheid = draaisnelheid;
        this._hoek = 0;
        this._sneeuw;
    }

    maken() {
        this._sneeuw = document.createElement('div');
        this._sneeuw.className = 'sneeuwvlokje';
        this._sneeuw.style.top  = this._verticale + 'px';
        this._sneeuw.style.height = 3 * this._grootte + 'em';
        this._sneeuw.style.width = 3 * this._grootte + 'em';
        this._sneeuw.style.left = this._horizontale + 'px';
        this._sneeuw.innerHTML = this._svg;
        inhoud.appendChild(this._sneeuw);
        this.bewegen();
    }

    vallen() {
        this._verticale += this._valsnelheid;
        this._sneeuw.style.left = this._horizontale + 'px';
        this._sneeuw.style.top = this._verticale + 'px';
        this._hoek += this._draaisnelheid;
        this._sneeuw.style.transform = "rotate(" + this._hoek + "deg)";
    }

    bewegen() {
        let bewegen = requestAnimationFrame( () => {
            if(this._verticale > inhoud.offsetHeight + inhoud.offsetTop - 60){
                this._verticale = inhoud.offsetTop;
                this._horizontale = (Math.random()*inhoud.offsetWidth) + inhoud.offsetLeft;
                this.vallen();
                this.bewegen();
            } else {
                this.vallen();
                this.bewegen();
            }
        });
    }
}

for(let i=0; i<20; ){
    let number = Math.random() * 4;
    if(number > 1){
        window['sneeuw'+i] = new Sneeuwvlokje(Math.random()*inhoud.offsetWidth, 0, 1.5, number, Math.random() * 2);
        window['sneeuw'+i].maken();
        i++;
    }
}