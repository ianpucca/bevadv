
// JavaScript Document
/* jQuery CCSlider Plugin 3.0
 * Copyright 2012, Nilok Bose
 * http://codecanyon.net/user/cosmocoder
 */
(function (c, a) {
    function b(H, bm) {
        var bb = c.extend(true, {}, c.fn.ccslider.defaults, bm);
        var L = this,
            aH = c(H),
            ac = aH.wrapInner('<div class="slider-innerWrapper"/>').find("div.slider-innerWrapper"),
            aL = aH.width(),
            B = aH.height(),
            G = aL,
            ar = B,
            aB = aH.find("img"),
            af = aB.length,
            O, p, T = false,
            R = false,
            aw = [],
            au = false,
            l = bb._3dOptions.imageWidth,
            aX = bb._3dOptions.imageHeight,
            ba = bb._3dOptions.transparentImg,
            Z = bb._3dOptions.innerSideColor,
            n = bb._3dOptions.makeShadow,
            ab = bb._3dOptions.shadowColor,
            C = bb._3dOptions.slices,
            aj = bb._3dOptions.rows,
            X = bb._3dOptions.columns,
            d = bb._3dOptions.delay,
            ak = bb._3dOptions.delayDir,
            m = bb._3dOptions.depthOffset,
            A = bb._3dOptions.sliceGap,
            aJ = bb._3dOptions.easing,
            aQ = bb._3dOptions.fallBack,
            F, a0, aY = bb.startSlide,
            ag = false,
            s = false,
            ao = false,
            g, a5, a6, aC;
        for (var V = 0; V < af; V++) {
            aw[V] = aB.eq(V).data("transition")
        }
        if (bb.effectType === "3d") {
            if (a.createElement("canvas").getContext) {
                p = "3d";
                O = bb.effect;
                F = bb.animSpeed
            } else {
                p = "2d";
                O = aQ;
                F = bb._3dOptions.fallBackSpeed;
                R = true;
                aH.addClass("fallback")
            }
        } else {
            p = "2d";
            O = bb.effect;
            F = bb.animSpeed
        }
        aH.addClass("ccslider");
        if (bb.directionNav) {
            var bo = c('<a class="slider-nav prev"/>').appendTo(aH),
                aS = c('<a class="slider-nav next"/>').appendTo(aH);
            bo.click(function () {
                L.prev()
            });
            aS.click(function () {
                L.next()
            })
        }
        if (bb.controlLinks) {
            var bp = c('<ul class="control-links" />').appendTo(aH),
                a4 = "";
            if (bb.controlLinkThumbs) {
                aH.addClass("controlThumbs")
            }
            for (var V = 0; V < af; V++) {
                if (bb.controlLinkThumbs) {
                    a4 += '<li class="linkThumb" data-index="' + V + '"><img src="' + bb.controlThumbLocation + aB.eq(V).data("thumbname") + '" /></li>'
                } else {
                    a4 += '<li data-index="' + V + '">' + (V + 1) + "</li>"
                }
            }
            bp.append(a4).delegate("li", "click", function () {
                if (!c(this).hasClass("active")) {
                    L.goToSlide(c(this).data("index"))
                }
            })
        }
        function I() {
            if (bb.controlLinks) {
                bp.find("li").removeClass("active").eq(aY).addClass("active")
            }
        }
        I();
        var W, aa;
        aH.bind("touchstart.ccslider", function (i) {
            var a = i.originalEvent.touches[0];
            W = a.pageX
        }).bind("touchmove.ccslider", function (i) {
            var a = i.originalEvent.touches[0];
            aa = a.pageX;
            if (aa - W >= 50) {
                L.next()
            } else {
                if (aa - W <= -50) {
                    L.prev()
                }
            }
            i.preventDefault()
        });

        function E() {
            if (!ao && !s) {
                g = setInterval(function () {
                    if (p === "3d") {
                        k("next")
                    } else {
                        an("next")
                    }
                }, bb.pauseTime)
            }
        }
        function aO() {
            clearInterval(g);
            g = ""
        }
        if (bb.autoPlay) {
            E()
        }
        if (bb.pauseOnHover) {
            aH.hover(function () {
                ao = true;
                aO()
            }, function () {
                ao = false;
                if (g === "" && bb.autoPlay && !ag) {
                    E()
                }
            })
        }
        if (bb.autoPlay) {
            var q = c('<div class="slider-timer pause"/>').appendTo(aH);
            q.click(function () {
                if (q.hasClass("pause")) {
                    q.removeClass("pause").addClass("play");
                    aO();
                    ag = true
                } else {
                    q.removeClass("play").addClass("pause");
                    E();
                    ag = false
                }
            })
        }
        function D() {
            s = false;
            if (bb.autoPlay && !ag) {
                E()
            }
        }
        this.next = function () {
            if (g) {
                aO()
            }
            if (p === "3d") {
                k("next")
            } else {
                an("next")
            }
        };
        this.prev = function () {
            if (g) {
                aO()
            }
            if (p === "3d") {
                k("prev")
            } else {
                an("prev")
            }
        };
        this.stop = function () {
            q.trigger("click")
        };
        this.start = function () {
            q.trigger("click")
        };
        this.goToSlide = function (a) {
            if (p === "3d") {
                k(a)
            } else {
                an(a)
            }
        };
        this.destroy = function () {
            aH.children().not(ac).remove();
            ac.children().not(aB).remove();
            aB.unwrap().removeAttr("style");
            ac.remove();
            aO();
            aH.removeData("ccslider").removeData("dimensions").removeAttr("style").unbind(".ccslider");
            c(window).unbind(".slider3d .slider2d")
        };
        this.beforeSlideChange = function (a) {
            bb.beforeSlideChange.call(aH[0], a);
            aH.trigger("beforeSlideChange", [a])
        };
        this.afterSlideChange = function (a) {
            bb.afterSlideChange.call(aH[0], a);
            aH.trigger("afterSlideChange", [a])
        };
        if (bb.captions) {
            var J = c('<div class="slider-caption"/>').appendTo(aH)
        }
        function w() {
            if (bb.captions) {
                var a = aB.eq(aY),
                    bc = "",
                    i = "";
                if (a.data("captionelem")) {
                    bc = a.data("captionelem");
                    i = c(bc)[0].innerHTML
                } else {
                    if (a[0].alt) {
                        i = a[0].alt
                    }
                }
                if (i) {
                    J[0].innerHTML = i;
                    a0 = a.data("captionPosition");
                    a0 = a0 ? a0 : bb.captionPosition;
                    J[0].className = "slider-caption " + a0;
                    J.removeAttr("style");
                    p === "3d" && az();
                    if (bb.captionAnimation === "none") {
                        J.show()
                    } else {
                        if (bb.captionAnimation === "fade") {
                            J.fadeIn(bb.captionAnimationSpeed)
                        } else {
                            if (bb.captionAnimation === "slide") {
                                if (a0 === "left" || a0 === "right") {
                                    J.animate({
                                        width: "show",
                                        paddingLeft: "show",
                                        paddingRight: "show"
                                    }, bb.captionAnimationSpeed)
                                } else {
                                    J.slideDown(bb.captionAnimationSpeed)
                                }
                            }
                        }
                    }
                }
            }
        }
        w();

        function aI() {
            if (bb.captions) {
                if (bb.captionAnimation === "none") {
                    J.hide()
                } else {
                    if (bb.captionAnimation === "fade") {
                        J.fadeOut(bb.captionAnimationSpeed)
                    } else {
                        if (bb.captionAnimation === "slide") {
                            if (a0 === "left" || a0 === "right") {
                                J.animate({
                                    width: "hide",
                                    paddingLeft: "hide",
                                    paddingRight: "hide"
                                }, bb.captionAnimationSpeed)
                            } else {
                                J.slideUp(bb.captionAnimationSpeed)
                            }
                        }
                    }
                }
            }
        }
        function az() {
            if (a0 === "bottom") {
                J.css({
                    width: l - parseInt(J.css("padding-left"), 10) - parseInt(J.css("padding-right"), 10),
                    left: (G - l) / 2,
                    bottom: (ar - aX) / 2,
                    right: "auto"
                })
            } else {
                if (a0 === "top") {
                    J.css({
                        width: l - parseInt(J.css("padding-left"), 10) - parseInt(J.css("padding-right"), 10),
                        left: (G - l) / 2,
                        top: (ar - aX) / 2,
                        right: "auto"
                    })
                } else {
                    if (a0 === "left") {
                        J.css({
                            height: aX - parseInt(J.css("padding-top"), 10) - parseInt(J.css("padding-bottom"), 10),
                            left: (G - l) / 2,
                            top: (ar - aX) / 2,
                            right: "auto",
                            bottom: "auto"
                        })
                    } else {
                        if (a0 === "right") {
                            J.css({
                                height: aX - parseInt(J.css("padding-top"), 10) - parseInt(J.css("padding-bottom"), 10),
                                right: (G - l) / 2,
                                top: (ar - aX) / 2,
                                left: "auto",
                                bottom: "auto"
                            })
                        }
                    }
                }
            }
        }
        var br = c('<div class="cc-htmlwrapper"/>').appendTo(aH);
        for (var V = 0; V < af; V++) {
            var bs = aB.eq(V).data("htmlelem");
            if (bs) {
                br.append(c(bs))
            }
        }
        function aV() {
            var i = aB.eq(aY).data("htmlelem");
            if (i) {
                br.show();
                c(i).show()
            }
        }
        function t() {
            br.hide().children().hide()
        }
        aV();
        var P = c('<a class="slider-link" href="" />').appendTo(aH);
        P.hide();
        var bt = [];
        for (var V = 0; V < af; V++) {
            bt[V] = aB.eq(V).data("href")
        }
        function aD() {
            if (bt[aY]) {
                P.show();
                P[0].href = bt[aY]
            }
        }
        aD();
        au = O === "random" ? true : false;

        function N() {
            var i = [];
            if (p === "3d") {
                if (n) {
                    i = ["cubeUp", "cubeDown", "cubeRight", "cubeLeft"]
                } else {
                    i = ["cubeUp", "cubeDown", "cubeRight", "cubeLeft", "flipUp", "flipDown", "flipRight", "flipLeft", "blindsVertical", "blindsHorizontal", "gridBlocksUp", "gridBlocksDown", "gridBlocksLeft", "gridBlocksRight"]
                }
            } else {
                i = ["fade", "horizontalOverlap", "verticalOverlap", "horizontalSlide", "verticalSlide", "horizontalWipe", "verticalWipe", "horizontalSplit", "verticalSplit", "fadeSlide", "circle", "fadeZoom", "clock", "zoomInOut", "spinFade", "rotate"]
            }
            O = i[Math.floor(Math.random() * (i.length + 1))];
            if (O === undefined) {
                O = i[0]
            }
        }
        if (au) {
            N()
        }
        function a2() {
            aD();
            w();
            aV();
            D();
            L.afterSlideChange(aY);
            if (au) {
                N();
                p === "3d" ? v() : K()
            } else {
                if (aw[aY]) {
                    p === "3d" ? v() : K()
                }
            }
        }
        if (p === "3d") {
            aH.data("dimensions", {
                width: G,
                height: ar,
                imageWidth: l,
                imageHeight: aX
            });
            var bu = parseInt(bo.css("left"), 10),
                y = parseInt(aS.css("right"), 10);
            ac.hide();
            aH.css("background", "transparent none");
            if (bb.autoPlay) {
                var bv = parseInt(q.css("right"), 10),
                    ai = parseInt(q.css("top"), 10)
            }
            function e() {
                var a = aH.parent(),
                    bd = (a.width() + 0.5) | 0,
                    bg = aH.data("dimensions"),
                    bf = bg.width - bg.imageWidth;
                if (bd !== aH.width()) {
                    var i = bg.width / bg.height,
                        bc = bg.imageWidth / bg.imageHeight;
                    if (bg.width <= bd) {
                        aH.width(bg.width).height(bg.height);
                        G = bg.width;
                        ar = bg.height;
                        l = bg.imageWidth;
                        aX = bg.imageHeight
                    } else {
                        aH.width(bd).height(bd / i);
                        G = bd;
                        ar = (bd / i + 0.5) | 0;
                        l = bd - bf;
                        aX = (l / bc + 0.5) | 0
                    }
                }
                bo.css("left", bf / 2 + bu);
                aS.css("right", bf / 2 + y);
                az();
                q && q.css({
                    right: bv + bf / 2,
                    top: ai + bf / 2
                });
                P.add(br).css({
                    width: l,
                    height: aX,
                    left: "50%",
                    top: "50%",
                    marginLeft: -l / 2,
                    marginTop: -aX / 2
                })
            }
            e();

            function a9() {
                (G - l) % 2 !== 0 && (l--);
                (ar - aX) % 2 !== 0 && (aX--)
            }
            a9();
            var bw, r, aG, f, aZ = [],
                z = [],
                M = [],
                S = [],
                aq = [],
                Y = [],
                aF = [],
                ah = [];

            function v() {
                if (aw[aY]) {
                    O = aw[aY].effect ? aw[aY].effect : au ? O : bb.effect;
                    C = aw[aY].slices ? aw[aY].slices : bb._3dOptions.slices;
                    aj = aw[aY].rows ? aw[aY].rows : bb._3dOptions.rows;
                    X = aw[aY].columns ? aw[aY].columns : bb._3dOptions.columns;
                    d = aw[aY].delay ? aw[aY].delay : bb._3dOptions.delay;
                    ak = aw[aY].delayDir ? aw[aY].delayDir : bb._3dOptions.delayDir;
                    m = aw[aY].depthOffset ? aw[aY].depthOffset : bb._3dOptions.depthOffset;
                    A = aw[aY].sliceGap ? aw[aY].sliceGap : bb._3dOptions.sliceGap;
                    aJ = aw[aY].easing ? aw[aY].easing : bb._3dOptions.easing;
                    F = aw[aY].animSpeed ? aw[aY].animSpeed : bb.animSpeed
                }
                T = O.indexOf("grid") !== -1 ? true : false;
                if (O === "cubeLeft" || O === "cubeRight") {
                    bw = l;
                    r = ((aX / C) + 0.5) | 0;
                    aG = l
                } else {
                    if (O === "cubeUp" || O === "cubeDown") {
                        bw = ((l / C) + 0.5) | 0;
                        r = aX;
                        aG = aX
                    } else {
                        if (O === "flipLeft" || O === "flipRight" || O === "blindsHorizontal") {
                            bw = l;
                            r = ((aX / C) + 0.5) | 0;
                            aG = 10
                        } else {
                            if (O === "flipUp" || O === "flipDown" || O === "blindsVertical") {
                                bw = ((l / C) + 0.5) | 0;
                                r = aX;
                                aG = 10
                            } else {
                                if (T) {
                                    bw = ((l / X) + 0.5) | 0;
                                    r = ((aX / aj) + 0.5) | 0;
                                    aG = 10;
                                    C = aj * X
                                }
                            }
                        }
                    }
                }
                f = aG === 10 ? 500 : l > 500 ? aG + 100 : aG + 50;
                if (aZ[0]) {
                    aH.find("canvas.draw").remove()
                }
                a5 = aA(C);
                if (T) {
                    a6 = aA(aj);
                    aC = aA(X)
                }
                var b = C,
                    bg, bf, bc, be;
                ah = [];
                while (b--) {
                    if (T) {
                        bf = u(b);
                        if (bf[0] <= a6) {
                            if (bf[1] <= aC) {
                                bg = 2 + bf[0] + bf[1]
                            } else {
                                bg = 2 + bf[0] + (X - 1 - bf[1])
                            }
                        } else {
                            if (bf[1] <= aC) {
                                bg = 2 + (aj - 1 - bf[0]) + bf[1]
                            } else {
                                bg = 2 + (aj - 1 - bf[0]) + (X - 1 - bf[1])
                            }
                        }
                    } else {
                        if (b <= a5) {
                            bg = 2 + b
                        } else {
                            bg = 2 + C - 1 - b
                        }
                    }
                    aZ[b] = c('<canvas class="draw"/>').css("z-index", bg);
                    ah[b] = aZ[b][0];
                    z[b] = aZ[b][0].getContext("2d");
                    aZ[b][0].width = G;
                    aZ[b][0].height = ar;
                    if (!S[b]) {
                        S[b] = a.createElement("canvas");
                        Y[b] = S[b].getContext("2d")
                    }
                    if (!aq[b]) {
                        aq[b] = a.createElement("canvas");
                        aF[b] = aq[b].getContext("2d")
                    }
                    bc = bw;
                    be = r;
                    if (T) {
                        if (bf[0] === (aj - 1)) {
                            be = aX - bf[0] * r
                        }
                        if (bf[1] === (X - 1)) {
                            bc = l - bf[1] * bw
                        }
                        M[b] = new Cube(bc, be, aG, f, z[b], Z, []);
                        M[b].position.y = aX / 2 - be / 2 - bf[0] * r;
                        M[b].position.x = -l / 2 + bc / 2 + bf[1] * bw
                    } else {
                        if (O.indexOf("Left") !== -1 || O.indexOf("Right") !== -1 || O === "blindsHorizontal") {
                            if (b === (C - 1)) {
                                be = aX - b * r
                            }
                            M[b] = new Cube(bc, be, aG, f, z[b], Z, []);
                            M[b].position.y = aX / 2 - be / 2 - b * r
                        } else {
                            if (O.indexOf("Up") !== -1 || O.indexOf("Down") !== -1 || O === "blindsVertical") {
                                if (b === (C - 1)) {
                                    bc = l - b * bw
                                }
                                M[b] = new Cube(bc, be, aG, f, z[b], Z, []);
                                M[b].position.x = -l / 2 + bc / 2 + b * bw
                            }
                        }
                    }
                    S[b].width = aq[b].width = bc;
                    S[b].height = aq[b].height = be;
                    if (T) {
                        aU(Y[b], aB[aY], bf[0], bf[1])
                    } else {
                        aU(Y[b], aB[aY], b)
                    }
                    M[b].images[0] = S[b];
                    M[b].render()
                }
                aH.append(ah)
            }
            v();
            c.browser.webkit && v();

            function aP() {
                if (n && O.indexOf("cube") === 0) {
                    var i = c('<canvas class="shadow"/>').appendTo(aH).css("z-index", "1"),
                        bc = i[0].getContext("2d");
                    bc.canvas.width = G;
                    bc.canvas.height = ar;
                    var a = new Plane(l, aG, f, bc, "#444", "", ab),
                        be = aH.data("dimensions"),
                        bd = be.width - be.imageWidth;
                    a.position.y = -aX / 2 + 50;
                    a.position.z = aG / 2;
                    a.rotation.x = Math.PI / 2;
                    a.shadowOffsetY = 50 + 25;
                    a.render()
                }
            }
            aP();
            c(window).bind("resize.slider3d orientationchange.slider3d", function () {
                e();
                a9();
                bb.autoPlay && L.stop();
                aH.find("canvas.draw, canvas.shadow").remove();
                v();
                aP();
                bb.autoPlay && L.start()
            })
        }
        function k(a) {
            if (!s) {
                if (!ao && g) {
                    aO()
                }
                var b = aY,
                    bq = aB[aY],
                    be, bn, bk, bg, bj, bi, bh, bc;
                if (typeof (a) === "number") {
                    aY = a;
                    a = b < aY ? "next" : "prev"
                } else {
                    aY += ~~ (a === "next") || -1;
                    aY = aY < 0 ? af - 1 : aY % af
                }
                var e = aB[aY];
                L.beforeSlideChange(aY);
                aI();
                t();
                I();
                P.hide();
                s = true;
                switch (O) {
                case "cubeLeft":
                    if (a === "next") {
                        be = 1;
                        bn = -1
                    } else {
                        be = 3;
                        bn = 1
                    }
                    bk = "y";
                    break;
                case "cubeRight":
                    if (a === "next") {
                        be = 3;
                        bn = 1
                    } else {
                        be = 1;
                        bn = -1
                    }
                    bk = "y";
                    break;
                case "cubeUp":
                    if (a === "next") {
                        be = 5;
                        bn = 1
                    } else {
                        be = 4;
                        bn = -1
                    }
                    bk = "x";
                    break;
                case "cubeDown":
                    if (a === "next") {
                        be = 4;
                        bn = -1
                    } else {
                        be = 5;
                        bn = 1
                    }
                    bk = "x";
                    break;
                case "flipLeft":
                    if (a === "next") {
                        bn = -1
                    } else {
                        bn = 1
                    }
                    be = 2;
                    bk = "y";
                    break;
                case "flipRight":
                    if (a === "next") {
                        bn = 1
                    } else {
                        bn = -1
                    }
                    be = 2;
                    bk = "y";
                    break;
                case "flipUp":
                    if (a === "next") {
                        bn = 1
                    } else {
                        bn = -1
                    }
                    be = 2;
                    bk = "x";
                    break;
                case "flipDown":
                    if (a === "next") {
                        bn = -1
                    } else {
                        bn = 1
                    }
                    be = 2;
                    bk = "x";
                    break;
                case "blindsVertical":
                    if (a === "next") {
                        bn = 1
                    } else {
                        bn = -1
                    }
                    be = 2;
                    bk = "y";
                    break;
                case "blindsHorizontal":
                    if (a === "next") {
                        bn = -1
                    } else {
                        bn = 1
                    }
                    be = 2;
                    bk = "x";
                    break;
                case "gridBlocksUp":
                    if (a === "next") {
                        bn = 1
                    } else {
                        bn = -1
                    }
                    be = 2;
                    bk = "x";
                    break;
                case "gridBlocksDown":
                    if (a === "next") {
                        bn = -1
                    } else {
                        bn = 1
                    }
                    be = 2;
                    bk = "x";
                    break;
                case "gridBlocksLeft":
                    if (a === "next") {
                        bn = -1
                    } else {
                        bn = 1
                    }
                    be = 2;
                    bk = "y";
                    break;
                case "gridBlocksRight":
                    if (a === "next") {
                        bn = 1
                    } else {
                        bn = -1
                    }
                    be = 2;
                    bk = "y";
                    break
                }
                bi = C;
                while (bi--) {
                    if (T) {
                        bj = u(bi);
                        aU(Y[bi], bq, bj[0], bj[1]);
                        aU(aF[bi], e, bj[0], bj[1])
                    } else {
                        aU(Y[bi], bq, bi);
                        aU(aF[bi], e, bi)
                    }
                    M[bi].images[0] = S[bi];
                    M[bi].images[be] = aq[bi]
                }
                if (O.indexOf("cube") === 0) {
                    bg = Math.PI / 2
                } else {
                    bg = Math.PI
                }
                bi = C;
                var f, bl;
                while (bi--) {
                    M[bi].rotation[bk] = 0;
                    if (T) {
                        bj = u(bi);
                        switch (ak) {
                        case "fromCentre":
                            f = (Math.abs(bj[0] - a6)) * d + (Math.abs(bj[1] - aC)) * d;
                            bl = 0;
                            break;
                        case "toCentre":
                            if (bj[0] < a6) {
                                f = bj[0] * d
                            } else {
                                f = (aj - 1 - bj[0]) * d
                            }
                            if (bj[1] < aC) {
                                f += bj[1] * d
                            } else {
                                f += (X - 1 - bj[1]) * d
                            }
                            bl = a5;
                            break;
                        case "first-last":
                            f = bj[0] * d + bj[1] * d;
                            bl = C - 1;
                            break;
                        case "last-first":
                            f = (aj - 1 - bj[0]) * d + (X - 1 - bj[1]) * d;
                            bl = 0;
                            break
                        }
                    } else {
                        switch (ak) {
                        case "fromCentre":
                            f = (Math.abs(bi - a5)) * d;
                            bl = 0;
                            break;
                        case "toCentre":
                            if (bi < a5) {
                                f = bi * d
                            } else {
                                f = (C - 1 - bi) * d
                            }
                            bl = a5;
                            break;
                        case "first-last":
                            f = bi * d;
                            bl = C - 1;
                            break;
                        case "last-first":
                            f = (C - 1 - bi) * d;
                            bl = 0;
                            break
                        }
                    }
                    c.fx.interval = 25;
                    var h = {
                        axis: bk,
                        angle: 0,
                        z: 0,
                        gap: 0,
                        cubeX: M[bi].position.x,
                        cubeY: M[bi].position.y,
                        cubeZ: M[bi].position.z,
                        cube: M[bi],
                        cubeNum: bi,
                        gridXY: bj
                    };
                    c(h).delay(f).animate({
                        angle: bn * bg,
                        gap: 2 * A,
                        z: 2 * m
                    }, {
                        duration: F,
                        specialEasing: {
                            angle: aJ,
                            z: "easeInOutCubic",
                            gap: "easeInOutCubic"
                        },
                        step: aW,
                        complete: function () {
                            if (this.cubeNum === bl) {
                                c.fx.interval = 16;
                                a2()
                            }
                        }
                    })
                }
            }
        }
        function aW(a, i) {
            if (i.prop === "angle") {
                this.cube.rotation[this.axis] = a
            } else {
                if (i.prop === "gap") {
                    if (a > A) {
                        a = 2 * A - a
                    }
                    if (O === "blindsHorizontal") {
                        this.cube.position.y = this.cubeY - (this.cubeNum - a5) * a
                    } else {
                        if (O === "blindsVertical") {
                            this.cube.position.x = this.cubeX + (this.cubeNum - a5) * a
                        } else {
                            if (T) {
                                this.cube.position.y = this.cubeY - (this.gridXY[0] - a6) * a;
                                this.cube.position.x = this.cubeX + (this.gridXY[1] - aC) * a
                            } else {
                                if (this.axis === "y") {
                                    this.cube.position.y = this.cubeY - (this.cubeNum - a5) * a
                                } else {
                                    if (this.axis === "x") {
                                        this.cube.position.x = this.cubeX + (this.cubeNum - a5) * a
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (a > m) {
                        a = 2 * m - a
                    }
                    this.cube.position.z = this.cubeZ + a;
                    this.cube.render()
                }
            }
        }
        function aU(b, c, d, i) {
            var e = b.canvas.width,
                bc = b.canvas.height;
            if (ba) {
                b.clearRect(0, 0, e, bc)
            }
            if (c.width !== l || c.height !== aX) {
                var f = a.createElement("canvas"),
                    bj = f.getContext("2d");
                f.width = l;
                f.height = aX;
                bj.drawImage(c, 0, 0, l, aX);
                c = f
            }
            if (O.indexOf("grid") !== -1) {
                var g = ((c.width / X) + 0.5) | 0,
                    h = ((c.height / aj) + 0.5) | 0,
                    be = g,
                    bi = h;
                if (d === (aj - 1)) {
                    h = c.height - d * h
                }
                if (i === (X - 1)) {
                    g = c.width - i * g
                }
                b.drawImage(c, i * be, d * bi, g, h, 0, 0, e, bc)
            } else {
                if (O.indexOf("Up") !== -1 || O.indexOf("Down") !== -1 || O === "blindsVertical") {
                    var g = ((c.width / C) + 0.5) | 0,
                        be = g;
                    if (d === C - 1) {
                        g = c.width - d * g
                    }
                    b.drawImage(c, d * be, 0, g, c.height, 0, 0, e, bc)
                } else {
                    if (O.indexOf("Left") !== -1 || O.indexOf("Right") !== -1 || O === "blindsHorizontal") {
                        var h = ((c.height / C) + 0.5) | 0,
                            bi = h;
                        if (d === C - 1) {
                            h = c.height - d * h
                        }
                        b.drawImage(c, 0, d * bi, c.width, h, 0, 0, e, bc)
                    }
                }
            }
        }
        function aA(a) {
            var i;
            if (a % 2 === 0) {
                i = a / 2
            } else {
                i = (a + 1) / 2
            }
            return (i - 1)
        }
        function u(a) {
            var b, i;
            if (a % X !== 0) {
                b = (a / X) | 0;
                i = a % X
            } else {
                b = a / X;
                i = 0
            }
            return [b, i]
        }
        if (p === "2d") {
            var bx = new Image(),
                j = 1,
                x = 1,
                a8 = 0,
                o = aH.parent(),
                bu = parseInt(bo.css("left"), 10),
                y = parseInt(aS.css("right"), 10),
                U = (bu + y) < 0 ? -(bu + y) : 0;
            aB.each(function () {
                bx.src = this.src;
                if (j < bx.width) {
                    j = bx.width
                }
                if (x < bx.height) {
                    x = bx.height
                }
            });
            a8 = j / x;
            aH.css({
                backgroundImage: "none"
            });
            c(window).bind("resize.slider2d orientationchange.slider2d", function () {
                bb.autoPlay && L.stop();
                if (o.width() >= j + U) {
                    aH.width(j);
                    aH.height(x);
                    aL = j;
                    B = x
                } else {
                    var i = o.is("body") ? (o.width() - U) : o.width(),
                        bc = i / a8;
                    aH.width(i);
                    aH.height(bc);
                    aL = i;
                    B = bc
                }
                if (aK) {
                    Q.css({
                        left: -aL,
                        width: aL,
                        height: (Math.sqrt(aL * aL + B * B)),
                        marginTop: -(Math.sqrt(aL * aL + B * B)) / 2
                    });
                    ad.css({
                        right: -aL,
                        width: aL,
                        height: (Math.sqrt(aL * aL + B * B)),
                        marginTop: -(Math.sqrt(aL * aL + B * B)) / 2
                    });
                    h.add(ax).css({
                        width: aL,
                        height: B,
                        marginTop: -B / 2
                    })
                }
                bb.autoPlay && L.start()
            }).trigger("resize.slider2d");
            aB.eq(aY).css("z-index", "3").fadeIn(600, function () {
                aB.show()
            });
            var by, aT, aR, a7, aK, aM, ad, Q, ax, h;

            function K() {
                if (aw[aY] && !R) {
                    O = aw[aY].effect ? aw[aY].effect : au ? O : bb.effect;
                    F = aw[aY].animSpeed ? aw[aY].animSpeed : bb.animSpeed
                }
                if ((O === "clock" || O === "circle" || O === "spinFade" || O === "rotate") && (c.browser.msie && c.browser.version < 9)) {
                    O = "fadeSlide"
                }
                if (O.indexOf("Wipe") !== -1) {
                    if (!by) {
                        by = c('<div class="wipe-div"/>').appendTo(aH)
                    }
                }
                if (O.indexOf("Split") !== -1) {
                    if (!aT) {
                        aT = c('<div class="split1-div"/>').appendTo(aH);
                        aR = c('<div class="split2-div"/>').appendTo(aH)
                    }
                }
                if (O.indexOf("circle") !== -1) {
                    if (!a7) {
                        a7 = c('<div class="circle-div"/>').appendTo(ac)
                    }
                }
                if (O.indexOf("clock") !== -1) {
                    if (!aK) {
                        aK = c('<div class="clock-mask left"/>').appendTo(aH);
                        ad = c('<div class="clock-outer"/>').appendTo(aK);
                        ax = c('<div class="clock-inner"/>').appendTo(ad);
                        aM = c('<div class="clock-mask right"/>').appendTo(aH);
                        Q = c('<div class="clock-outer"/>').appendTo(aM);
                        h = c('<div class="clock-inner"/>').appendTo(Q);
                        Q.css({
                            left: -aL,
                            width: aL,
                            height: (Math.sqrt(aL * aL + B * B)),
                            marginTop: -(Math.sqrt(aL * aL + B * B)) / 2
                        });
                        ad.css({
                            right: -aL,
                            width: aL,
                            height: (Math.sqrt(aL * aL + B * B)),
                            marginTop: -(Math.sqrt(aL * aL + B * B)) / 2
                        });
                        h.add(ax).css({
                            width: aL,
                            height: B,
                            marginTop: -B / 2
                        })
                    }
                }
            }
            K()
        }
        function an(b) {
            if (!s) {
                if (!ao && g) {
                    aO()
                }
                var d = aY,
                    bk = aB.eq(aY),
                    bh;
                if (typeof (b) === "number") {
                    aY = b;
                    b = d < aY ? "next" : "prev"
                } else {
                    aY += ~~ (b === "next") || -1;
                    aY = aY < 0 ? af - 1 : aY % af
                }
                bh = aB.eq(aY);
                L.beforeSlideChange(aY);
                aI();
                t();
                I();
                P.hide();
                s = true;
                aB.css("z-index", "1");
                bk.css("z-index", "2");
                switch (O) {
                case "fade":
                    bh.css({
                        opacity: 0,
                        zIndex: 3
                    }).animate({
                        opacity: 1
                    }, F, a2);
                    break;
                case "horizontalOverlap":
                    if (b === "next") {
                        bh.css({
                            left: aL,
                            zIndex: 3
                        }).animate({
                            left: 0
                        }, F, a2)
                    } else {
                        bh.css({
                            left: -aL,
                            zIndex: 3
                        }).animate({
                            left: 0
                        }, F, a2)
                    }
                    break;
                case "verticalOverlap":
                    if (b === "next") {
                        bh.css({
                            top: -B,
                            zIndex: 3
                        }).animate({
                            top: 0
                        }, F, a2)
                    } else {
                        bh.css({
                            top: B,
                            zIndex: 3
                        }).animate({
                            top: 0
                        }, F, a2)
                    }
                    break;
                case "horizontalSlide":
                    if (b === "next") {
                        bh.css({
                            left: aL,
                            zIndex: 3
                        }).animate({
                            left: 0
                        }, F, a2);
                        bk.animate({
                            left: -aL
                        }, F, function () {
                            bk.css("left", "0")
                        })
                    } else {
                        bh.css({
                            left: -aL,
                            zIndex: 3
                        }).animate({
                            left: 0
                        }, F, a2);
                        bk.animate({
                            left: aL
                        }, F, function () {
                            bk.css("left", "0")
                        })
                    }
                    break;
                case "verticalSlide":
                    if (b === "next") {
                        bh.css({
                            top: -B,
                            zIndex: 3
                        }).animate({
                            top: 0
                        }, F, a2);
                        bk.animate({
                            top: B
                        }, F, function () {
                            bk.css("top", "0")
                        })
                    } else {
                        bh.css({
                            top: B,
                            zIndex: 3
                        }).animate({
                            top: 0
                        }, F, a2);
                        bk.animate({
                            top: -B
                        }, F, function () {
                            bk.css("top", "0")
                        })
                    }
                    break;
                case "horizontalWipe":
                    bh.hide();
                    by.css({
                        background: "url(" + bh[0].src + ") no-repeat",
                        height: B
                    }).animate({
                        width: aL
                    }, F, function () {
                        by.css({
                            width: 0,
                            height: 0
                        });
                        bh.css("z-index", "3").show();
                        a2()
                    });
                    break;
                case "verticalWipe":
                    bh.hide();
                    by.css({
                        background: "url(" + bh[0].src + ") no-repeat",
                        width: aL
                    }).animate({
                        height: B
                    }, F, function () {
                        by.css({
                            width: 0,
                            height: 0
                        });
                        bh.css("z-index", "3").show();
                        a2()
                    });
                    break;
                case "verticalSplit":
                    bk.css({
                        opacity: 0
                    });
                    bh.css({
                        zIndex: 3
                    });
                    aT.css({
                        width: aL / 2,
                        height: B,
                        top: 0,
                        left: 0,
                        background: "url(" + bk[0].src + ") no-repeat"
                    });
                    aR.css({
                        width: aL / 2,
                        height: B,
                        top: 0,
                        right: 0,
                        background: "url(" + bk[0].src + ") -50% 0 no-repeat"
                    });
                    aT.animate({
                        width: 0
                    }, F);
                    aR.animate({
                        width: 0
                    }, {
                        duration: F,
                        step: function (a) {
                            aR.css("background-position", a - aL + "px 0")
                        },
                        complete: function () {
                            bk.css("opacity", "1");
                            aT.add(aR).css({
                                top: "auto",
                                bottom: "auto",
                                left: "auto",
                                right: "auto"
                            });
                            a2()
                        }
                    });
                    break;
                case "horizontalSplit":
                    bk.css({
                        opacity: 0
                    });
                    bh.css({
                        zIndex: 3
                    });
                    aT.css({
                        width: aL,
                        height: B / 2,
                        top: 0,
                        left: 0,
                        background: "url(" + bk[0].src + ") no-repeat"
                    });
                    aR.css({
                        width: aL,
                        height: B / 2,
                        bottom: 0,
                        left: 0,
                        background: "url(" + bk[0].src + ") 0 -50% no-repeat"
                    });
                    aT.animate({
                        height: 0
                    }, F);
                    aR.animate({
                        height: 0
                    }, {
                        duration: F,
                        step: function (a) {
                            aR.css("background-position", "0" + (a - B) + "px")
                        },
                        complete: function () {
                            bk.css("opacity", "1");
                            aT.add(aR).css({
                                top: "auto",
                                bottom: "auto",
                                left: "auto",
                                right: "auto"
                            });
                            a2()
                        }
                    });
                    break;
                case "fadeSlide":
                    bh.css("z-index", "3");
                    bk.css("z-index", "4");
                    if (b === "next") {
                        bk.animate({
                            left: -aL,
                            opacity: 0
                        }, F, function () {
                            bk.css({
                                left: 0,
                                opacity: 1,
                                zIndex: 1
                            });
                            a2()
                        })
                    } else {
                        bk.animate({
                            left: aL,
                            opacity: 0
                        }, F, function () {
                            bk.css({
                                left: 0,
                                opacity: 1,
                                zIndex: 1
                            });
                            a2()
                        })
                    }
                    break;
                case "circle":
                    var e = Math.round(Math.sqrt(aL * aL + B * B));
                    if (b === "next") {
                        bh.hide();
                        a7.css({
                            background: "url(" + bh[0].src + ") center center no-repeat",
                            "-webkit-background-size": aL + "px " + B + "px",
                            "background-size": aL + "px " + B + "px"
                        }).animate({
                            width: e,
                            height: e,
                            marginLeft: -e / 2,
                            marginTop: -e / 2
                        }, F, function () {
                            a7.css({
                                width: 0,
                                height: 0,
                                marginLeft: 0,
                                marginTop: 0
                            });
                            bh.css("z-index", "3").show();
                            a2()
                        })
                    } else {
                        bh.css("z-index", "3");
                        bk.css("z-index", "2");
                        a7.css({
                            background: "url(" + bk[0].src + ") center center no-repeat",
                            "-webkit-background-size": aL + "px " + B + "px",
                            "background-size": aL + "px " + B + "px",
                            width: e,
                            height: e,
                            marginLeft: -e / 2,
                            marginTop: -e / 2,
                            zIndex: 4
                        }).animate({
                            width: 0,
                            height: 0,
                            marginLeft: 0,
                            marginTop: 0
                        }, F, function () {
                            a7.css("z-index", "3");
                            a2()
                        })
                    }
                    break;
                case "fadeZoom":
                    bh.css("z-index", "3");
                    bk.css({
                        "z-index": "4",
                        maxWidth: "none",
                        width: aL
                    });
                    var f = aL,
                        bf = B;
                    bk.animate({
                        top: -bf / 2,
                        left: -f / 2,
                        width: 2 * f,
                        height: 2 * bf,
                        opacity: 0
                    }, F, function () {
                        bk.css({
                            top: 0,
                            left: 0,
                            maxWidth: "100%",
                            width: "auto",
                            height: "auto",
                            opacity: 1,
                            zIndex: 2
                        });
                        a2()
                    });
                    break;
                case "clock":
                    aK.add(aM).show();
                    ax.add(h).css({
                        background: "url(" + bh[0].src + ") center center no-repeat"
                    });
                    var j = {
                        deg: 0
                    };
                    c(j).animate({
                        deg: 358
                    }, {
                        duration: F,
                        step: function (a) {
                            if (a <= 180) {
                                Q.css({
                                    "-moz-transform": "rotate(" + a + "deg)",
                                    "-webkit-transform": "rotate(" + a + "deg)",
                                    "-o-transform": "rotate(" + a + "deg)",
                                    "-ms-transform": "rotate(" + a + "deg)"
                                });
                                h.css({
                                    "-moz-transform": "rotate(-" + a + "deg)",
                                    "-webkit-transform": "rotate(-" + a + "deg)",
                                    "-o-transform": "rotate(-" + a + "deg)",
                                    "-ms-transform": "rotate(-" + a + "deg)"
                                })
                            } else {
                                Q.css({
                                    "-moz-transform": "rotate(180deg)",
                                    "-webkit-transform": "rotate(180deg)",
                                    "-o-transform": "rotate(180deg)",
                                    "-ms-transform": "rotate(180deg)"
                                });
                                h.css({
                                    "-moz-transform": "rotate(-180deg)",
                                    "-webkit-transform": "rotate(-180deg)",
                                    "-o-transform": "rotate(-180deg)",
                                    "-ms-transform": "rotate(-180deg)"
                                });
                                a = a - 180;
                                ad.css({
                                    "-moz-transform": "rotate(" + a + "deg)",
                                    "-webkit-transform": "rotate(" + a + "deg)",
                                    "-o-transform": "rotate(" + a + "deg)",
                                    "-ms-transform": "rotate(" + a + "deg)"
                                });
                                ax.css({
                                    "-moz-transform": "rotate(-" + a + "deg)",
                                    "-webkit-transform": "rotate(-" + a + "deg)",
                                    "-o-transform": "rotate(-" + a + "deg)",
                                    "-ms-transform": "rotate(-" + a + "deg)"
                                })
                            }
                        },
                        complete: function () {
                            aK.add(aM).hide();
                            ad.add(Q).add(ax).add(h).css({
                                "-moz-transform": "rotate(0)",
                                "-webkit-transform": "rotate(0)",
                                "-o-transform": "rotate(0)",
                                "-ms-transform": "rotate(0)"
                            });
                            bh.css("z-index", "3");
                            a2()
                        }
                    });
                    break;
                case "zoomInOut":
                    aB.hide();
                    bh.css("z-index", "3").show();
                    bk.css("z-index", "4").show();
                    var f = bk[0].width,
                        bf = bk[0].height,
                        be = bh[0].width,
                        i = bh[0].height;
                    bh.css({
                        top: i / 2,
                        left: be / 2,
                        width: 0,
                        height: 0,
                        opacity: 0
                    });
                    bk.animate({
                        top: bf / 2,
                        left: f / 2,
                        width: 0,
                        height: 0,
                        opacity: 0
                    }, F / 2, function () {
                        bh.animate({
                            top: 0,
                            left: 0,
                            width: be,
                            height: i,
                            opacity: 1
                        }, F / 2, function () {
                            bk.css({
                                top: 0,
                                left: 0,
                                width: "auto",
                                height: "auto",
                                opacity: 1,
                                zIndex: 2
                            });
                            bh.css({
                                width: "auto",
                                height: "auto"
                            });
                            aB.show();
                            a2()
                        })
                    });
                    break;
                case "spinFade":
                    bh.css("z-index", "3");
                    bk.css({
                        "z-index": "4",
                        "-moz-transform-origin": "center center",
                        "-webkit-transform-origin": "center center",
                        "-o-transform-origin": "center center",
                        "-ms-transform-origin": "center center"
                    });
                    var f = bk[0].width,
                        bf = bk[0].height,
                        j = {
                            deg: 0
                        };
                    c(j).animate({
                        deg: 1080
                    }, {
                        duration: F,
                        step: function (a) {
                            bk.css({
                                "-moz-transform": "rotate(" + a + "deg)",
                                "-webkit-transform": "rotate(" + a + "deg)",
                                "-o-transform": "rotate(" + a + "deg)",
                                "-ms-transform": "rotate(" + a + "deg)"
                            })
                        }
                    });
                    bk.animate({
                        top: bf / 2,
                        left: f / 2,
                        width: 0,
                        height: 0,
                        opacity: 0
                    }, F, function () {
                        bk.css({
                            top: 0,
                            left: 0,
                            width: "auto",
                            height: "auto",
                            opacity: 1,
                            zIndex: 2
                        });
                        a2()
                    });
                    break;
                case "rotate":
                    bh.css({
                        "z-index": "3",
                        "-moz-transform-origin": "0 0",
                        "-moz-transform": "rotate(-90deg)",
                        "-webkit-transform-origin": "0 0",
                        "-webkit-transform": "rotate(-90deg)",
                        "-o-transform-origin": "0 0",
                        "-o-transform": "rotate(-90deg)",
                        "-ms-transform-origin": "0 0",
                        "-ms-transform": "rotate(-90deg)"
                    });
                    var j = {
                        deg: -90
                    };
                    c(j).animate({
                        deg: 0
                    }, {
                        duration: F,
                        step: function (a) {
                            bh.css({
                                "-moz-transform": "rotate(" + a + "deg)",
                                "-webkit-transform": "rotate(" + a + "deg)",
                                "-o-transform": "rotate(" + a + "deg)",
                                "-ms-transform": "rotate(" + a + "deg)"
                            })
                        },
                        complete: a2
                    })
                }
            }
        }
    }
    c.fn.ccslider = function (d) {
        return this.each(function () {
            if (!c.data(this, "ccslider")) {
                c.data(this, "ccslider", new b(this, d))
            }
        })
    };
    c.fn.ccslider.defaults = {
        effectType: "3d",
        effect: "cubeLeft",
        _3dOptions: {
            imageWidth: 600,
            imageHeight: 300,
            transparentImg: false,
            innerSideColor: "#444",
            makeShadow: true,
            shadowColor: "rgba(0, 0, 0, 0.7)",
            slices: 3,
            rows: 3,
            columns: 3,
            delay: 100,
            delayDir: "first-last",
            depthOffset: 400,
            sliceGap: 20,
            easing: "easeInOutCubic",
            fallBack: "fadeSlide",
            fallBackSpeed: 1200
        },
        animSpeed: 2400,
        startSlide: 0,
        directionNav: true,
        controlLinks: true,
        controlLinkThumbs: false,
        controlThumbLocation: "",
        autoPlay: true,
        pauseTime: 2000,
        pauseOnHover: true,
        captions: true,
        captionPosition: "bottom",
        captionAnimation: "slide",
        captionAnimationSpeed: 400,
        beforeSlideChange: function (d) {},
        afterSlideChange: function (d) {}
    }
})(jQuery, document);

function Cube(e, b, g, f, c, d, a) {
    this.width = e;
    this.height = b;
    this.depth = g;
    this.focalLength = f;
    this.ctx = c;
    this.color = d;
    this.images = a;
    this.rotation = {
        x: 0,
        y: 0,
        z: 0,
        parent: this
    };
    this.position = {
        x: 0,
        y: 0,
        z: 0,
        parent: this
    };
    this.canvas = this.ctx.canvas;
    this.cwidth = this.canvas.width;
    this.cheight = this.canvas.height;
    this.centerx = this.cwidth / 2;
    this.centery = this.cheight / 2;
    this.maxX = 0;
    this.minX = 0;
    this.maxY = 0;
    this.minY = 0;
    this.drawWidth = 0;
    this.drawHeight = 0;
    this.vertexPoints = [make3DPoint(-this.width / 2, this.height / 2, -this.depth / 2), make3DPoint(this.width / 2, this.height / 2, -this.depth / 2), make3DPoint(this.width / 2, -this.height / 2, -this.depth / 2), make3DPoint(-this.width / 2, -this.height / 2, -this.depth / 2), make3DPoint(-this.width / 2, this.height / 2, this.depth / 2), make3DPoint(this.width / 2, this.height / 2, this.depth / 2), make3DPoint(this.width / 2, -this.height / 2, this.depth / 2), make3DPoint(-this.width / 2, -this.height / 2, this.depth / 2)];
    this.position.z += this.depth / 2
}
Cube.prototype.render = function () {
    var d = Transform3DTo2D(this.vertexPoints, this.rotation, this.position, this.focalLength, this.centerx, this.centery);
    this.ctx.clearRect(this.minX, this.minY, this.drawWidth, this.drawHeight);
    var b;
    if (isVisible(d[3], d[0], d[1])) {
        b = [d[0], d[1], d[3], d[2]];
        mapTexture(this.ctx, b, this.images[0])
    }
    if (isVisible(d[6], d[5], d[4])) {
        if (this.rotation.x === 0) {
            b = [d[5], d[4], d[6], d[7]]
        } else {
            b = [d[7], d[6], d[4], d[5]]
        }
        mapTexture(this.ctx, b, this.images[2])
    }
    if (isVisible(d[2], d[1], d[5]) && this.depth !== 0) {
        if (this.images[1]) {
            b = [d[1], d[5], d[2], d[6]];
            mapTexture(this.ctx, b, this.images[1])
        } else {
            this.ctx.fillStyle = this.color;
            drawPlane(this.ctx, d[1], d[5], d[6], d[2]);
            this.ctx.fill()
        }
    }
    if (isVisible(d[7], d[4], d[0]) && this.depth !== 0) {
        if (this.images[3]) {
            b = [d[4], d[0], d[7], d[3]];
            mapTexture(this.ctx, b, this.images[3])
        } else {
            this.ctx.fillStyle = this.color;
            drawPlane(this.ctx, d[4], d[0], d[3], d[7]);
            this.ctx.fill()
        }
    }
    if (isVisible(d[0], d[4], d[5]) && this.depth !== 0) {
        if (this.images[4]) {
            b = [d[4], d[5], d[0], d[1]];
            mapTexture(this.ctx, b, this.images[4])
        } else {
            this.ctx.fillStyle = this.color;
            drawPlane(this.ctx, d[4], d[5], d[1], d[0]);
            this.ctx.fill()
        }
    }
    if (isVisible(d[7], d[3], d[2]) && this.depth !== 0) {
        if (this.images[5]) {
            b = [d[3], d[2], d[7], d[6]];
            mapTexture(this.ctx, b, this.images[5])
        } else {
            this.ctx.fillStyle = this.color;
            drawPlane(this.ctx, d[3], d[2], d[6], d[7]);
            this.ctx.fill()
        }
    }
    var a = Math.max,
        c = Math.min;
    this.maxX = (a(d[0].x, d[1].x, d[2].x, d[3].x, d[4].x, d[5].x, d[6].x, d[7].x) + 1) | 0;
    this.minX = c(d[0].x, d[1].x, d[2].x, d[3].x, d[4].x, d[5].x, d[6].x, d[7].x) | 0;
    this.maxY = (a(d[0].y, d[1].y, d[2].y, d[3].y, d[4].y, d[5].y, d[6].y, d[7].y) + 1) | 0;
    this.minY = c(d[0].y, d[1].y, d[2].y, d[3].y, d[4].y, d[5].y, d[6].y, d[7].y) | 0;
    this.drawWidth = this.maxX - this.minX;
    this.drawHeight = this.maxY - this.minY
};

function Plane(e, a, g, b, d, c, f) {
    this.width = e;
    this.height = a;
    this.focalLength = g;
    this.ctx = b;
    this.color = d;
    this.shadowColor = f;
    this.rotation = {
        x: 0,
        y: 0,
        z: 0
    };
    this.position = {
        x: 0,
        y: 0,
        z: 0
    };
    this.canvas = this.ctx.canvas, this.cWidth = this.canvas.width, this.cHeight = this.canvas.height, this.centerx = this.cWidth / 2, this.centery = this.cHeight / 2;
    this.vertexPoints = [make3DPoint(-this.width / 2, this.height / 2, 0), make3DPoint(this.width / 2, this.height / 2, 0), make3DPoint(this.width / 2, -this.height / 2, 0), make3DPoint(-this.width / 2, -this.height / 2, 0)]
}
Plane.prototype.render = function () {
    var a = Transform3DTo2D(this.vertexPoints, this.rotation, this.position, this.focalLength, this.centerx, this.centery),
        b = (Math.max(a[0].y, a[1].y, a[2].y, a[3].y) + 1) | 0,
        c = Math.min(a[0].y, a[1].y, a[2].y, a[3].y) | 0;
    this.ctx.clearRect(0, 0, this.cWidth, this.cHeight);
    drawPlane(this.ctx, make2DPoint(0, this.cHeight), make2DPoint(this.cWidth, this.cHeight), make2DPoint(this.cWidth, b), make2DPoint(0, b));
    this.ctx.clip();
    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = (b - c) >= 25 ? this.shadowOffsetY : this.shadowOffsetY - 25 + (b - c);
    this.ctx.shadowBlur = 15;
    this.ctx.shadowColor = this.shadowColor;
    this.ctx.fillStyle = this.color;
    drawPlane(this.ctx, a[0], a[1], a[2], a[3]);
    this.ctx.fill()
};

function make3DPoint(b, d, c) {
    var a = {
        x: b,
        y: d,
        z: c
    };
    return a
}
function make2DPoint(b, c) {
    var a = {
        x: b,
        y: c
    };
    return a
}
function Transform3DTo2D(w, j, D, h, u, t) {
    var k = [],
        A = Math.sin,
        a = Math.cos,
        r = A(j.x),
        e = a(j.x),
        p = A(j.y),
        d = a(j.y),
        o = A(j.z),
        b = a(j.z),
        n, m, l, g, f, s, q, C, B, c;
    var v = w.length;
    while (v--) {
        n = w[v].x;
        m = w[v].y;
        l = w[v].z;
        g = e * m - r * l;
        f = r * m + e * l;
        q = d * f + p * n;
        s = -p * f + d * n;
        C = b * s - o * g;
        B = o * s + b * g;
        n = C + D.x;
        m = B + D.y;
        l = q + D.z;
        c = h / (h + l);
        n = n * c + u;
        m = -(m * c) + t;
        k[v] = {
            x: n,
            y: m
        }
    }
    return k
}
function drawPlane(g, f, e, i, h) {
    g.beginPath();
    g.moveTo(f.x, f.y);
    g.lineTo(e.x, e.y);
    g.lineTo(i.x, i.y);
    g.lineTo(h.x, h.y);
    g.closePath()
}
function isVisible(e, d, f) {
    if (((d.y - e.y) / (d.x - e.x) - (f.y - e.y) / (f.x - e.x) < 0) ^ (e.x <= d.x === e.x > f.x)) {
        return true
    } else {
        return false
    }
};

function mapTexture(j, i, e) {
    var h = 5,
        g = 64,
        b = getProjectiveTransform(i);
    var d = b.transformProjectiveVector([0, 0, 1]),
        a = b.transformProjectiveVector([1, 0, 1]),
        f = b.transformProjectiveVector([0, 1, 1]),
        c = b.transformProjectiveVector([1, 1, 1]);
    j.save();
    j.beginPath();
    j.moveTo(d[0], d[1]);
    j.lineTo(a[0], a[1]);
    j.lineTo(c[0], c[1]);
    j.lineTo(f[0], f[1]);
    j.closePath();
    j.clip();
    divide(0, 0, 1, 1, d, a, f, c, b, h, g, j, e);
    j.restore()
}
function divide(o, W, m, V, U, T, S, Q, x, u, l, s, h) {
    var C = Math.abs,
        B = Math.max,
        g = Math.min,
        q = Math.sqrt;
    if (u) {
        var M = [T[0] + S[0] - 2 * U[0], T[1] + S[1] - 2 * U[1]],
            K = [T[0] + S[0] - 2 * Q[0], T[1] + S[1] - 2 * Q[1]],
            I = [M[0] + K[0], M[1] + K[1]],
            E = C((I[0] * I[0] + I[1] * I[1]) / (M[0] * K[0] + M[1] * K[1]));
        M = [T[0] - U[0] + Q[0] - S[0], T[1] - U[1] + Q[1] - S[1]];
        K = [S[0] - U[0] + Q[0] - T[0], S[1] - U[1] + Q[1] - T[1]];
        var A = C(M[0] * K[1] - M[1] * K[0]);
        if ((o === 0 && m === 1) || ((0.25 + E * 5) * A > (l * l))) {
            var c = (o + m) / 2,
                w = (W + V) / 2,
                a = x.transformProjectiveVector([c, w, 1]),
                i = x.transformProjectiveVector([c, W, 1]),
                t = x.transformProjectiveVector([c, V, 1]),
                p = x.transformProjectiveVector([o, w, 1]),
                j = x.transformProjectiveVector([m, w, 1]);
            --u;
            divide(o, W, c, w, U, i, p, a, x, u, l, s, h);
            divide(c, W, m, w, i, T, a, j, x, u, l, s, h);
            divide(o, w, c, V, p, a, S, t, x, u, l, s, h);
            divide(c, w, m, V, a, j, t, Q, x, u, l, s, h);
            return
        }
    }
    s.save();
    var P = [T[0] - U[0], T[1] - U[1]],
        y = [Q[0] - T[0], Q[1] - T[1]],
        R = [S[0] - Q[0], S[1] - Q[1]],
        k = [U[0] - S[0], U[1] - S[1]];
    var H = C(P[0] * k[1] - P[1] * k[0]),
        G = C(y[0] * P[1] - y[1] * P[0]),
        D = C(R[0] * y[1] - R[1] * y[0]),
        F = C(k[0] * R[1] - k[1] * R[0]),
        n = B(B(H, G), B(F, D)),
        d = 0,
        b = 0,
        L = 0,
        J = 0;
    switch (n) {
    case H:
        s.transform(P[0], P[1], -k[0], -k[1], U[0], U[1]);
        if (m !== 1) {
            L = 1.5 / q(P[0] * P[0] + P[1] * P[1])
        }
        if (V !== 1) {
            J = 1.5 / q(k[0] * k[0] + k[1] * k[1])
        }
        break;
    case G:
        s.transform(P[0], P[1], y[0], y[1], T[0], T[1]);
        if (m !== 1) {
            L = 1.5 / q(P[0] * P[0] + P[1] * P[1])
        }
        if (V !== 1) {
            J = 1.5 / q(y[0] * y[0] + y[1] * y[1])
        }
        d = -1;
        break;
    case D:
        s.transform(-R[0], -R[1], y[0], y[1], Q[0], Q[1]);
        if (m !== 1) {
            L = 1.5 / q(R[0] * R[0] + R[1] * R[1])
        }
        if (V !== 1) {
            J = 1.5 / q(y[0] * y[0] + y[1] * y[1])
        }
        d = -1;
        b = -1;
        break;
    case F:
        s.transform(-R[0], -R[1], -k[0], -k[1], S[0], S[1]);
        if (m !== 1) {
            L = 1.5 / q(R[0] * R[0] + R[1] * R[1])
        }
        if (V !== 1) {
            J = 1.5 / q(k[0] * k[0] + k[1] * k[1])
        }
        b = -1;
        break
    }
    var f = (m - o),
        e = (V - W),
        O = L * f,
        N = J * e;
    var v = h.width,
        z = h.height;
    s.drawImage(h, o * v, W * z, g(m - o + O, 1) * v, g(V - W + N, 1) * z, d, b, 1 + L, 1 + J);
    s.restore()
}
function getProjectiveTransform(b) {
    var c = new Matrix(9, 8, [
        [1, 1, 1, 0, 0, 0, -b[3].x, -b[3].x, -b[3].x],
        [0, 1, 1, 0, 0, 0, 0, -b[2].x, -b[2].x],
        [1, 0, 1, 0, 0, 0, -b[1].x, 0, -b[1].x],
        [0, 0, 1, 0, 0, 0, 0, 0, -b[0].x],
        [0, 0, 0, -1, -1, -1, b[3].y, b[3].y, b[3].y],
        [0, 0, 0, 0, -1, -1, 0, b[2].y, b[2].y],
        [0, 0, 0, -1, 0, -1, b[1].y, 0, b[1].y],
        [0, 0, 0, 0, 0, -1, 0, 0, b[0].y]
    ]);
    var d = c.rowEchelon().values;
    var a = new Matrix(3, 3, [
        [-d[0][8], -d[1][8], -d[2][8]],
        [-d[3][8], -d[4][8], -d[5][8]],
        [-d[6][8], -d[7][8], 1]
    ]);
    return a
};
var Matrix = function (a, c, b) {
        this.w = a;
        this.h = c;
        this.values = b || Matrix.allocate(c)
    };
Matrix.allocate = function (a, e) {
    var b = [],
        d = e,
        c = a;
    while (d--) {
        b[d] = [];
        while (c--) {
            b[d][c] = 0
        }
    }
    return b
};
Matrix.cloneValues = function (a) {
    var c = [],
        b = a.length;
    while (b--) {
        c[b] = [].concat(a[b])
    }
    return c
};
Matrix.prototype.transformProjectiveVector = function (b) {
    var c = [];
    for (var e = 0; e < this.h; ++e) {
        c[e] = 0;
        for (var a = 0; a < this.w; ++a) {
            c[e] += this.values[e][a] * b[a]
        }
    }
    var d = 1 / (c[c.length - 1]);
    for (var e = 0; e < this.h; ++e) {
        c[e] *= d
    }
    return c
};
Matrix.prototype.rowEchelon = function () {
    if (this.w <= this.h) {
        throw "Matrix rowEchelon size mismatch"
    }
    var h = Matrix.cloneValues(this.values);
    for (var a = 0; a < this.h; ++a) {
        var f = h[a][a];
        while (f == 0) {
            for (var g = a + 1; g < this.h; ++g) {
                if (h[g][a] != 0) {
                    var i = h[g];
                    h[g] = h[a];
                    h[a] = i;
                    break
                }
            }
            if (g == this.h) {
                return new Matrix(this.w, this.h, h)
            } else {
                f = h[a][a]
            }
        }
        var b = 1 / f;
        for (var e = a; e < this.w; ++e) {
            h[a][e] *= b
        }
        for (var d = 0; d < this.h; ++d) {
            if (d == a) {
                continue
            }
            var c = h[d][a];
            h[d][a] = 0;
            for (var e = a + 1; e < this.w; ++e) {
                h[d][e] -= c * h[a][e]
            }
        }
    }
    return new Matrix(this.w, this.h, h)
};