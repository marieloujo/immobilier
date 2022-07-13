// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { enableProdMode } from '@angular/core';
var frame = require("tns-core-modules/ui/frame");
var platform = require("tns-core-modules/platform");

import { AppModule } from "./app.module";
import { registerElement } from 'nativescript-angular/element-registry';

import { CardView } from 'nativescript-cardview';

registerElement('CardView', () => CardView);



enableProdMode();
platformNativeScriptDynamic().bootstrapModule(AppModule);
