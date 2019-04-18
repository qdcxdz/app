

var app = function(app) {  // module pattern



    app.makeView = function(m, stage) {
        var stageW = stage.width;
        var stageH = stage.height;
        const v = {};

        // var scaling = "full"; // this will resize to fit inside the screen dimensions
        // var color = light; // ZIM colors like green, blue, pink, faint, clear, etc.
        // var outerColor = dark;
        // var assets = ["line.png"];
        // var path = "assets/";
        //
        // var frame = new Frame(scaling, null, null, color, outerColor, assets, path, new Waiter());


        STYLE = {
            type:{
                Tabs:{
                    width:160,
                    spacing:20,
                    currentSelected:false
                },
                Button:{
                    width:70,
                    height:70,
                    corner:35,
                    backgroundColor:purple,
                    rollBackgroundColor:pink,
                    label:"",
                    shadowBlur:-1
                }
            }
        }

        const manager = v.manager = new Manager();

        const page1 = v.page1 = new Container(stageW, stageH);

        let header = new Container().addTo(page1);
        v.page1.logo = new Label(m.title).addTo(header);
        let content = new Container(500, 500).addTo(page1);



        let line1 = frame.asset("line.png").addTo(content).sca(0.68,0.7).pos(-123,85).place();
        let line2 = line1.clone().addTo(content).sca(0.5,0.7).pos(268,85).place();
        let line3 = line1.clone().addTo(content).sca(0.7,0.7).pos(-152,369).rot(-40).place();
        let line4 = line1.clone().addTo(content).sca(0.65,0.7).pos(340,124).rot(32).place();
        let line5 = line1.clone().addTo(content).sca(0.3,0.7).pos(403,272).rot(90).place();
        let line6 = line1.clone().addTo(content).sca(0.45,0.7).pos(100,192).rot(-75).place();
        let line7 = line1.clone().addTo(content).sca(0.5,0.7).pos(335,-168).place();
        let line8 = line1.clone().addTo(content).sca(0.48,0.7).pos(144,-48).rot(40).place();



        let cir1 = frame.asset("circle.png").addTo(content).sca(.28).pos(176,176).place().centerReg();
        // .animate({
        //    props:{rotation:360},
        //    loop:true,
        //    time:2000,
        //    ease:"linear",
        //    dynamic:true
        // });
        let cir2 = cir1.clone().addTo(content).sca(.28).pos(-205,166).place();
        let cir3 = cir1.clone().addTo(content).sca(.28).pos(476,166).place();
        let cir4 = cir1.clone().addTo(content).sca(.28).pos(166,386).place();
        let cir5 = cir1.clone().addTo(content).sca(.28).pos(-136,405).place();
        let cir6 = cir1.clone().addTo(content).sca(.28).pos(485,382).place();
        let cir7 = cir1.clone().addTo(content).sca(.28).pos(246,-85).place();
        let cir8 = cir1.clone().addTo(content).sca(.28).pos(545,-86).place();
        let cir9 = cir1.clone().addTo(content).sca(.28).pos(-45,-10).place();

        loop([cir1,cir2,cir3,cir4,cir5,cir6,cir7,cir8,cir9],function (i) {
             i.animate({
                props:{rotation:360},
                loop:true,
                time:2000,
                ease:"linear",
                dynamic:true
             });
        })

        // v.dial = new Dial().sca(2).center(content);
        // v.dial.currentValue = m.data[0];
        v.page1.circle1 = new Circle(40,"#ff9c5c").addTo(content).pos(-10,25);
        v.page1.circle2 = new Circle(40,"#ff9c5c").addTo(content).pos(210,210);
        v.page1.circle3 = new Circle(40,"#ff9c5c").addTo(content).pos(-100,440);
        v.page1.circle4 = new Circle(40,"#ff9c5c").addTo(content).pos(520,416);
        v.page1.circle5 = new Circle(40,"#ff9c5c").addTo(content).pos(510,200);
        v.page1.circle6 = new Circle(40,"#ff9c5c").addTo(content).pos(-170,200);
        v.page1.circle7 = new Circle(40,"#ff9c5c").addTo(content).pos(280,-50);
        v.page1.circle8 = new Circle(40,"#ff9c5c").addTo(content).pos(580,-50);
        v.page1.circle9 = new Circle(40,"#ff9c5c").addTo(content).pos(200,420);

        v.page1.drag1 = new Rectangle({width:55,height:55,color:"#00BCD4",corner:10}).addTo(content).pos(-330,60).alp(.8).drag();
        v.page1.drag2 = new Rectangle({width:55,height:55,color:"#00BCD4",corner:10}).addTo(content).pos(-330,160).alp(.8).drag();//.pos(200,420);
        v.page1.drag3 = new Rectangle({width:55,height:55,color:"#00BCD4",corner:10}).addTo(content).pos(-330,260).alp(.8).drag();
        v.page1.drag4 = new Rectangle({width:55,height:55,color:"#feea3a",corner:10}).addTo(content).pos(-330,360).alp(.8).drag();
        v.page1.drag5 = new Rectangle({width:55,height:55,color:"#feea3a",corner:10}).addTo(content).pos(800,60).alp(.8).drag();
        v.page1.drag6 = new Rectangle({width:55,height:55,color:"#feea3a",corner:10}).addTo(content).pos(800,160).alp(.8).drag();
        v.page1.drag7 = new Rectangle({width:55,height:55,color:"#E91E63",corner:10}).addTo(content).pos(800,260).alp(.7).drag();
        v.page1.drag8 = new Rectangle({width:55,height:55,color:"#E91E63",corner:10}).addTo(content).pos(800,360).alp(.7).drag();



        v.page1.icon1 = new Label({
             text:"2",
             size:100,
             font:"courier",
             color:"white",
             fontOptions:"bold"
        }).centerReg(v.page1.drag1).sca(.3);
        v.page1.icon2 = new Label({
             text:"2",
             size:100,
             font:"courier",
             color:"white",
             fontOptions:"bold"
        }).centerReg(v.page1.drag2).sca(.3);
        v.page1.icon3 = new Label({
             text:"3",
             size:100,
             font:"courier",
             color:"white",
             fontOptions:"bold"
        }).centerReg(v.page1.drag3).sca(.3);
        v.page1.icon4 = frame.asset("rot1.png").centerReg(v.page1.drag4).sca(.15);
        v.page1.icon5 = frame.asset("rot2.png").centerReg(v.page1.drag5).sca(.15);
        v.page1.icon6 = frame.asset("rot3.png").centerReg(v.page1.drag6).sca(.15);
        let fir = true;
        let sec = false;
        let thi = false;
        let icon71 = new Label({
             text:"+",
             size:200,
             color:"white"
        }).centerReg(v.page1.drag7).sca(.3);
        let icon72 = new Label({
             text:"x",
             size:150,
             color:"white"
        }).centerReg(v.page1.drag7).sca(.3).removeFrom();
        //clicking
        let c1 = false; let c2 = false;


       icon71.on("click",function () {
             console.log("GGG");
        });

        v.page1.drag7.on("click",function () {
             c1 = true;
             if (fir&&c1) {
                  icon71.removeFrom();
                  icon72.centerReg(v.page1.drag7);
                  c1 = false;
                  sec = true;
                  fir= false;
             }
             if (sec&&c1) {
                   icon72.removeFrom();
                   icon71.centerReg(v.page1.drag7);
                   c1 = false;
                   fir = true;
                   sec= false;
             }
             // if (sec&&!fir) {
             //      icon72.removeFrom();
             //      icon73.centerReg(v.page1.drag7);
             //      c1 = false;
             //      c2 = true;
             //      thi = true;
             //      sec= false;
             // }
        });
        v.page1.drag7.on("click",function () {
            // if (fir) {
            //       icon71.removeFrom();
            //       icon72.centerReg(v.page1.drag7);
            //       c1 = true;
            //       sec = true;
            //       // fir= false;
            // }

        });





        v.page1.icon81 = new Label({
             text:"x",
             size:150,
             color:"white"
        }).centerReg(v.page1.drag8).sca(.3);



        let footer = v.page1.tabs = new Tabs({
            tabs:[
                new Button({
                    icon: pizzazz.makeIcon("home", "white").alp(.7),
                    rollIcon: pizzazz.makeIcon("home", "black")
                }),
                new Button({
                    icon: pizzazz.makeIcon("settings", "white").alp(.7),
                    rollIcon: pizzazz.makeIcon("settings", "black")
                })]
        }).addTo(page1);
        // footer.buttons[0].setIcon("icon", pizzazz.makeIcon("settings", "white"))

        manager.add(new Layout(page1, [
            {object:header, maxWidth:90, marginTop:5},
            {object:content, marginTop:2, backgroundColor:black},
            {object:footer, maxWidth:90, marginTop:2}
       ], 2, black, true, null, stage));

        const page2 = v.page2 = new Container(stageW, stageH);
        header = new Container().addTo(page2);
        v.page2.logo = new Label(m.title).addTo(header);
        content = new Container(500, 500).addTo(page2);
        v.slider = new Slider().sca(1.5).center(content);
        v.slider.currentValue = m.data[1];

        footer = v.page2.tabs = v.page1.tabs.clone().addTo(page2);
        manager.add(new Layout(page2, [
            {object:header, maxWidth:90, marginTop:5},
            {object:content, marginTop:2, backgroundColor:blue},
            {object:footer, maxWidth:90, marginTop:2}
        ], 2, yellow, true, null, stage));

        manager.add(v.pages = new Pages([
            {page:page1, swipe:[null, null, page2, page2]},
            {page:page2, swipe:[null, null, page1, page1]}
        ], "slide", 500).addTo());

        return v;

    }
    return app; // module pattern
}(app||{}); // module pattern
