(self.webpackChunkddangkong_frontend=self.webpackChunkddangkong_frontend||[]).push([[202],{"./node_modules/@tanstack/react-query/build/modern/useQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>useQuery});var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/queryObserver.js"),_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useBaseQuery.js");function useQuery(options,queryClient){return(0,_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__.t)(options,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__.$,queryClient)}},"./node_modules/qr.js/lib/8BitByte.js":(module,__unused_webpack_exports,__webpack_require__)=>{var mode=__webpack_require__("./node_modules/qr.js/lib/mode.js");function QR8bitByte(data){this.mode=mode.MODE_8BIT_BYTE,this.data=data}QR8bitByte.prototype={getLength:function(buffer){return this.data.length},write:function(buffer){for(var i=0;i<this.data.length;i++)buffer.put(this.data.charCodeAt(i),8)}},module.exports=QR8bitByte},"./node_modules/qr.js/lib/BitBuffer.js":module=>{function QRBitBuffer(){this.buffer=new Array,this.length=0}QRBitBuffer.prototype={get:function(index){var bufIndex=Math.floor(index/8);return 1==(this.buffer[bufIndex]>>>7-index%8&1)},put:function(num,length){for(var i=0;i<length;i++)this.putBit(1==(num>>>length-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(bit){var bufIndex=Math.floor(this.length/8);this.buffer.length<=bufIndex&&this.buffer.push(0),bit&&(this.buffer[bufIndex]|=128>>>this.length%8),this.length++}},module.exports=QRBitBuffer},"./node_modules/qr.js/lib/ErrorCorrectLevel.js":module=>{module.exports={L:1,M:0,Q:3,H:2}},"./node_modules/qr.js/lib/Polynomial.js":(module,__unused_webpack_exports,__webpack_require__)=>{var math=__webpack_require__("./node_modules/qr.js/lib/math.js");function QRPolynomial(num,shift){if(null==num.length)throw new Error(num.length+"/"+shift);for(var offset=0;offset<num.length&&0==num[offset];)offset++;this.num=new Array(num.length-offset+shift);for(var i=0;i<num.length-offset;i++)this.num[i]=num[i+offset]}QRPolynomial.prototype={get:function(index){return this.num[index]},getLength:function(){return this.num.length},multiply:function(e){for(var num=new Array(this.getLength()+e.getLength()-1),i=0;i<this.getLength();i++)for(var j=0;j<e.getLength();j++)num[i+j]^=math.gexp(math.glog(this.get(i))+math.glog(e.get(j)));return new QRPolynomial(num,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var ratio=math.glog(this.get(0))-math.glog(e.get(0)),num=new Array(this.getLength()),i=0;i<this.getLength();i++)num[i]=this.get(i);for(i=0;i<e.getLength();i++)num[i]^=math.gexp(math.glog(e.get(i))+ratio);return new QRPolynomial(num,0).mod(e)}},module.exports=QRPolynomial},"./node_modules/qr.js/lib/QRCode.js":(module,__unused_webpack_exports,__webpack_require__)=>{var BitByte=__webpack_require__("./node_modules/qr.js/lib/8BitByte.js"),RSBlock=__webpack_require__("./node_modules/qr.js/lib/RSBlock.js"),BitBuffer=__webpack_require__("./node_modules/qr.js/lib/BitBuffer.js"),util=__webpack_require__("./node_modules/qr.js/lib/util.js"),Polynomial=__webpack_require__("./node_modules/qr.js/lib/Polynomial.js");function QRCode(typeNumber,errorCorrectLevel){this.typeNumber=typeNumber,this.errorCorrectLevel=errorCorrectLevel,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var proto=QRCode.prototype;proto.addData=function(data){var newData=new BitByte(data);this.dataList.push(newData),this.dataCache=null},proto.isDark=function(row,col){if(row<0||this.moduleCount<=row||col<0||this.moduleCount<=col)throw new Error(row+","+col);return this.modules[row][col]},proto.getModuleCount=function(){return this.moduleCount},proto.make=function(){if(this.typeNumber<1){var typeNumber=1;for(typeNumber=1;typeNumber<40;typeNumber++){for(var rsBlocks=RSBlock.getRSBlocks(typeNumber,this.errorCorrectLevel),buffer=new BitBuffer,totalDataCount=0,i=0;i<rsBlocks.length;i++)totalDataCount+=rsBlocks[i].dataCount;for(i=0;i<this.dataList.length;i++){var data=this.dataList[i];buffer.put(data.mode,4),buffer.put(data.getLength(),util.getLengthInBits(data.mode,typeNumber)),data.write(buffer)}if(buffer.getLengthInBits()<=8*totalDataCount)break}this.typeNumber=typeNumber}this.makeImpl(!1,this.getBestMaskPattern())},proto.makeImpl=function(test,maskPattern){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var row=0;row<this.moduleCount;row++){this.modules[row]=new Array(this.moduleCount);for(var col=0;col<this.moduleCount;col++)this.modules[row][col]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(test,maskPattern),this.typeNumber>=7&&this.setupTypeNumber(test),null==this.dataCache&&(this.dataCache=QRCode.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,maskPattern)},proto.setupPositionProbePattern=function(row,col){for(var r=-1;r<=7;r++)if(!(row+r<=-1||this.moduleCount<=row+r))for(var c=-1;c<=7;c++)col+c<=-1||this.moduleCount<=col+c||(this.modules[row+r][col+c]=0<=r&&r<=6&&(0==c||6==c)||0<=c&&c<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=c&&c<=4)},proto.getBestMaskPattern=function(){for(var minLostPoint=0,pattern=0,i=0;i<8;i++){this.makeImpl(!0,i);var lostPoint=util.getLostPoint(this);(0==i||minLostPoint>lostPoint)&&(minLostPoint=lostPoint,pattern=i)}return pattern},proto.createMovieClip=function(target_mc,instance_name,depth){var qr_mc=target_mc.createEmptyMovieClip(instance_name,depth);this.make();for(var row=0;row<this.modules.length;row++)for(var y=1*row,col=0;col<this.modules[row].length;col++){var x=1*col;this.modules[row][col]&&(qr_mc.beginFill(0,100),qr_mc.moveTo(x,y),qr_mc.lineTo(x+1,y),qr_mc.lineTo(x+1,y+1),qr_mc.lineTo(x,y+1),qr_mc.endFill())}return qr_mc},proto.setupTimingPattern=function(){for(var r=8;r<this.moduleCount-8;r++)null==this.modules[r][6]&&(this.modules[r][6]=r%2==0);for(var c=8;c<this.moduleCount-8;c++)null==this.modules[6][c]&&(this.modules[6][c]=c%2==0)},proto.setupPositionAdjustPattern=function(){for(var pos=util.getPatternPosition(this.typeNumber),i=0;i<pos.length;i++)for(var j=0;j<pos.length;j++){var row=pos[i],col=pos[j];if(null==this.modules[row][col])for(var r=-2;r<=2;r++)for(var c=-2;c<=2;c++)this.modules[row+r][col+c]=-2==r||2==r||-2==c||2==c||0==r&&0==c}},proto.setupTypeNumber=function(test){for(var bits=util.getBCHTypeNumber(this.typeNumber),i=0;i<18;i++){var mod=!test&&1==(bits>>i&1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=mod}for(i=0;i<18;i++){mod=!test&&1==(bits>>i&1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=mod}},proto.setupTypeInfo=function(test,maskPattern){for(var data=this.errorCorrectLevel<<3|maskPattern,bits=util.getBCHTypeInfo(data),i=0;i<15;i++){var mod=!test&&1==(bits>>i&1);i<6?this.modules[i][8]=mod:i<8?this.modules[i+1][8]=mod:this.modules[this.moduleCount-15+i][8]=mod}for(i=0;i<15;i++){mod=!test&&1==(bits>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=mod:i<9?this.modules[8][15-i-1+1]=mod:this.modules[8][15-i-1]=mod}this.modules[this.moduleCount-8][8]=!test},proto.mapData=function(data,maskPattern){for(var inc=-1,row=this.moduleCount-1,bitIndex=7,byteIndex=0,col=this.moduleCount-1;col>0;col-=2)for(6==col&&col--;;){for(var c=0;c<2;c++)if(null==this.modules[row][col-c]){var dark=!1;byteIndex<data.length&&(dark=1==(data[byteIndex]>>>bitIndex&1)),util.getMask(maskPattern,row,col-c)&&(dark=!dark),this.modules[row][col-c]=dark,-1==--bitIndex&&(byteIndex++,bitIndex=7)}if((row+=inc)<0||this.moduleCount<=row){row-=inc,inc=-inc;break}}},QRCode.PAD0=236,QRCode.PAD1=17,QRCode.createData=function(typeNumber,errorCorrectLevel,dataList){for(var rsBlocks=RSBlock.getRSBlocks(typeNumber,errorCorrectLevel),buffer=new BitBuffer,i=0;i<dataList.length;i++){var data=dataList[i];buffer.put(data.mode,4),buffer.put(data.getLength(),util.getLengthInBits(data.mode,typeNumber)),data.write(buffer)}var totalDataCount=0;for(i=0;i<rsBlocks.length;i++)totalDataCount+=rsBlocks[i].dataCount;if(buffer.getLengthInBits()>8*totalDataCount)throw new Error("code length overflow. ("+buffer.getLengthInBits()+">"+8*totalDataCount+")");for(buffer.getLengthInBits()+4<=8*totalDataCount&&buffer.put(0,4);buffer.getLengthInBits()%8!=0;)buffer.putBit(!1);for(;!(buffer.getLengthInBits()>=8*totalDataCount||(buffer.put(QRCode.PAD0,8),buffer.getLengthInBits()>=8*totalDataCount));)buffer.put(QRCode.PAD1,8);return QRCode.createBytes(buffer,rsBlocks)},QRCode.createBytes=function(buffer,rsBlocks){for(var offset=0,maxDcCount=0,maxEcCount=0,dcdata=new Array(rsBlocks.length),ecdata=new Array(rsBlocks.length),r=0;r<rsBlocks.length;r++){var dcCount=rsBlocks[r].dataCount,ecCount=rsBlocks[r].totalCount-dcCount;maxDcCount=Math.max(maxDcCount,dcCount),maxEcCount=Math.max(maxEcCount,ecCount),dcdata[r]=new Array(dcCount);for(var i=0;i<dcdata[r].length;i++)dcdata[r][i]=255&buffer.buffer[i+offset];offset+=dcCount;var rsPoly=util.getErrorCorrectPolynomial(ecCount),modPoly=new Polynomial(dcdata[r],rsPoly.getLength()-1).mod(rsPoly);ecdata[r]=new Array(rsPoly.getLength()-1);for(i=0;i<ecdata[r].length;i++){var modIndex=i+modPoly.getLength()-ecdata[r].length;ecdata[r][i]=modIndex>=0?modPoly.get(modIndex):0}}var totalCodeCount=0;for(i=0;i<rsBlocks.length;i++)totalCodeCount+=rsBlocks[i].totalCount;var data=new Array(totalCodeCount),index=0;for(i=0;i<maxDcCount;i++)for(r=0;r<rsBlocks.length;r++)i<dcdata[r].length&&(data[index++]=dcdata[r][i]);for(i=0;i<maxEcCount;i++)for(r=0;r<rsBlocks.length;r++)i<ecdata[r].length&&(data[index++]=ecdata[r][i]);return data},module.exports=QRCode},"./node_modules/qr.js/lib/RSBlock.js":(module,__unused_webpack_exports,__webpack_require__)=>{var ECL=__webpack_require__("./node_modules/qr.js/lib/ErrorCorrectLevel.js");function QRRSBlock(totalCount,dataCount){this.totalCount=totalCount,this.dataCount=dataCount}QRRSBlock.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],QRRSBlock.getRSBlocks=function(typeNumber,errorCorrectLevel){var rsBlock=QRRSBlock.getRsBlockTable(typeNumber,errorCorrectLevel);if(null==rsBlock)throw new Error("bad rs block @ typeNumber:"+typeNumber+"/errorCorrectLevel:"+errorCorrectLevel);for(var length=rsBlock.length/3,list=new Array,i=0;i<length;i++)for(var count=rsBlock[3*i+0],totalCount=rsBlock[3*i+1],dataCount=rsBlock[3*i+2],j=0;j<count;j++)list.push(new QRRSBlock(totalCount,dataCount));return list},QRRSBlock.getRsBlockTable=function(typeNumber,errorCorrectLevel){switch(errorCorrectLevel){case ECL.L:return QRRSBlock.RS_BLOCK_TABLE[4*(typeNumber-1)+0];case ECL.M:return QRRSBlock.RS_BLOCK_TABLE[4*(typeNumber-1)+1];case ECL.Q:return QRRSBlock.RS_BLOCK_TABLE[4*(typeNumber-1)+2];case ECL.H:return QRRSBlock.RS_BLOCK_TABLE[4*(typeNumber-1)+3];default:return}},module.exports=QRRSBlock},"./node_modules/qr.js/lib/math.js":module=>{for(var QRMath={glog:function(n){if(n<1)throw new Error("glog("+n+")");return QRMath.LOG_TABLE[n]},gexp:function(n){for(;n<0;)n+=255;for(;n>=256;)n-=255;return QRMath.EXP_TABLE[n]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},i=0;i<8;i++)QRMath.EXP_TABLE[i]=1<<i;for(i=8;i<256;i++)QRMath.EXP_TABLE[i]=QRMath.EXP_TABLE[i-4]^QRMath.EXP_TABLE[i-5]^QRMath.EXP_TABLE[i-6]^QRMath.EXP_TABLE[i-8];for(i=0;i<255;i++)QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]]=i;module.exports=QRMath},"./node_modules/qr.js/lib/mode.js":module=>{module.exports={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}},"./node_modules/qr.js/lib/util.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Mode=__webpack_require__("./node_modules/qr.js/lib/mode.js"),Polynomial=__webpack_require__("./node_modules/qr.js/lib/Polynomial.js"),math=__webpack_require__("./node_modules/qr.js/lib/math.js"),QRMaskPattern_PATTERN000=0,QRMaskPattern_PATTERN001=1,QRMaskPattern_PATTERN010=2,QRMaskPattern_PATTERN011=3,QRMaskPattern_PATTERN100=4,QRMaskPattern_PATTERN101=5,QRMaskPattern_PATTERN110=6,QRMaskPattern_PATTERN111=7,QRUtil={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(data){for(var d=data<<10;QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)>=0;)d^=QRUtil.G15<<QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15);return(data<<10|d)^QRUtil.G15_MASK},getBCHTypeNumber:function(data){for(var d=data<<12;QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18)>=0;)d^=QRUtil.G18<<QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18);return data<<12|d},getBCHDigit:function(data){for(var digit=0;0!=data;)digit++,data>>>=1;return digit},getPatternPosition:function(typeNumber){return QRUtil.PATTERN_POSITION_TABLE[typeNumber-1]},getMask:function(maskPattern,i,j){switch(maskPattern){case QRMaskPattern_PATTERN000:return(i+j)%2==0;case QRMaskPattern_PATTERN001:return i%2==0;case QRMaskPattern_PATTERN010:return j%3==0;case QRMaskPattern_PATTERN011:return(i+j)%3==0;case QRMaskPattern_PATTERN100:return(Math.floor(i/2)+Math.floor(j/3))%2==0;case QRMaskPattern_PATTERN101:return i*j%2+i*j%3==0;case QRMaskPattern_PATTERN110:return(i*j%2+i*j%3)%2==0;case QRMaskPattern_PATTERN111:return(i*j%3+(i+j)%2)%2==0;default:throw new Error("bad maskPattern:"+maskPattern)}},getErrorCorrectPolynomial:function(errorCorrectLength){for(var a=new Polynomial([1],0),i=0;i<errorCorrectLength;i++)a=a.multiply(new Polynomial([1,math.gexp(i)],0));return a},getLengthInBits:function(mode,type){if(1<=type&&type<10)switch(mode){case Mode.MODE_NUMBER:return 10;case Mode.MODE_ALPHA_NUM:return 9;case Mode.MODE_8BIT_BYTE:case Mode.MODE_KANJI:return 8;default:throw new Error("mode:"+mode)}else if(type<27)switch(mode){case Mode.MODE_NUMBER:return 12;case Mode.MODE_ALPHA_NUM:return 11;case Mode.MODE_8BIT_BYTE:return 16;case Mode.MODE_KANJI:return 10;default:throw new Error("mode:"+mode)}else{if(!(type<41))throw new Error("type:"+type);switch(mode){case Mode.MODE_NUMBER:return 14;case Mode.MODE_ALPHA_NUM:return 13;case Mode.MODE_8BIT_BYTE:return 16;case Mode.MODE_KANJI:return 12;default:throw new Error("mode:"+mode)}}},getLostPoint:function(qrCode){for(var moduleCount=qrCode.getModuleCount(),lostPoint=0,row=0;row<moduleCount;row++)for(var col=0;col<moduleCount;col++){for(var sameCount=0,dark=qrCode.isDark(row,col),r=-1;r<=1;r++)if(!(row+r<0||moduleCount<=row+r))for(var c=-1;c<=1;c++)col+c<0||moduleCount<=col+c||0==r&&0==c||dark==qrCode.isDark(row+r,col+c)&&sameCount++;sameCount>5&&(lostPoint+=3+sameCount-5)}for(row=0;row<moduleCount-1;row++)for(col=0;col<moduleCount-1;col++){var count=0;qrCode.isDark(row,col)&&count++,qrCode.isDark(row+1,col)&&count++,qrCode.isDark(row,col+1)&&count++,qrCode.isDark(row+1,col+1)&&count++,0!=count&&4!=count||(lostPoint+=3)}for(row=0;row<moduleCount;row++)for(col=0;col<moduleCount-6;col++)qrCode.isDark(row,col)&&!qrCode.isDark(row,col+1)&&qrCode.isDark(row,col+2)&&qrCode.isDark(row,col+3)&&qrCode.isDark(row,col+4)&&!qrCode.isDark(row,col+5)&&qrCode.isDark(row,col+6)&&(lostPoint+=40);for(col=0;col<moduleCount;col++)for(row=0;row<moduleCount-6;row++)qrCode.isDark(row,col)&&!qrCode.isDark(row+1,col)&&qrCode.isDark(row+2,col)&&qrCode.isDark(row+3,col)&&qrCode.isDark(row+4,col)&&!qrCode.isDark(row+5,col)&&qrCode.isDark(row+6,col)&&(lostPoint+=40);var darkCount=0;for(col=0;col<moduleCount;col++)for(row=0;row<moduleCount;row++)qrCode.isDark(row,col)&&darkCount++;return lostPoint+=10*(Math.abs(100*darkCount/moduleCount/moduleCount-50)/5)}};module.exports=QRUtil},"./node_modules/react-qr-code/lib/QRCodeSvg/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_propTypes2=_interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js")),_react=__webpack_require__("./node_modules/react/index.js"),_react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var propTypes={bgColor:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.string]).isRequired,bgD:_propTypes2.default.string.isRequired,fgColor:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.string]).isRequired,fgD:_propTypes2.default.string.isRequired,size:_propTypes2.default.number.isRequired,title:_propTypes2.default.string,viewBoxSize:_propTypes2.default.number.isRequired,xmlns:_propTypes2.default.string},QRCodeSvg=(0,_react.forwardRef)((function(_ref,ref){var bgColor=_ref.bgColor,bgD=_ref.bgD,fgD=_ref.fgD,fgColor=_ref.fgColor,size=_ref.size,title=_ref.title,viewBoxSize=_ref.viewBoxSize,_ref$xmlns=_ref.xmlns,xmlns=void 0===_ref$xmlns?"http://www.w3.org/2000/svg":_ref$xmlns,props=function _objectWithoutProperties(obj,keys){var target={};for(var i in obj)keys.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(obj,i)&&(target[i]=obj[i]);return target}(_ref,["bgColor","bgD","fgD","fgColor","size","title","viewBoxSize","xmlns"]);return _react2.default.createElement("svg",_extends({},props,{height:size,ref,viewBox:"0 0 "+viewBoxSize+" "+viewBoxSize,width:size,xmlns}),title?_react2.default.createElement("title",null,title):null,_react2.default.createElement("path",{d:bgD,fill:bgColor}),_react2.default.createElement("path",{d:fgD,fill:fgColor}))}));QRCodeSvg.displayName="QRCodeSvg",QRCodeSvg.propTypes=propTypes,exports.default=QRCodeSvg},"./node_modules/react-qr-code/lib/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_propTypes2=_interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js")),_ErrorCorrectLevel2=_interopRequireDefault(__webpack_require__("./node_modules/qr.js/lib/ErrorCorrectLevel.js")),_QRCode2=_interopRequireDefault(__webpack_require__("./node_modules/qr.js/lib/QRCode.js")),_react=__webpack_require__("./node_modules/react/index.js"),_react2=_interopRequireDefault(_react),_QRCodeSvg2=_interopRequireDefault(__webpack_require__("./node_modules/react-qr-code/lib/QRCodeSvg/index.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var propTypes={bgColor:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.string]),fgColor:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.string]),level:_propTypes2.default.string,size:_propTypes2.default.number,value:_propTypes2.default.string.isRequired},QRCode=(0,_react.forwardRef)((function(_ref,ref){var _ref$bgColor=_ref.bgColor,bgColor=void 0===_ref$bgColor?"#FFFFFF":_ref$bgColor,_ref$fgColor=_ref.fgColor,fgColor=void 0===_ref$fgColor?"#000000":_ref$fgColor,_ref$level=_ref.level,level=void 0===_ref$level?"L":_ref$level,_ref$size=_ref.size,size=void 0===_ref$size?256:_ref$size,value=_ref.value,props=function _objectWithoutProperties(obj,keys){var target={};for(var i in obj)keys.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(obj,i)&&(target[i]=obj[i]);return target}(_ref,["bgColor","fgColor","level","size","value"]),qrcode=new _QRCode2.default(-1,_ErrorCorrectLevel2.default[level]);qrcode.addData(value),qrcode.make();var cells=qrcode.modules;return _react2.default.createElement(_QRCodeSvg2.default,_extends({},props,{bgColor,bgD:cells.map((function(row,rowIndex){return row.map((function(cell,cellIndex){return cell?"":"M "+cellIndex+" "+rowIndex+" l 1 0 0 1 -1 0 Z"})).join(" ")})).join(" "),fgColor,fgD:cells.map((function(row,rowIndex){return row.map((function(cell,cellIndex){return cell?"M "+cellIndex+" "+rowIndex+" l 1 0 0 1 -1 0 Z":""})).join(" ")})).join(" "),ref,size,viewBoxSize:cells.length}))}));QRCode.displayName="QRCode",QRCode.propTypes=propTypes,exports.Ay=QRCode}}]);