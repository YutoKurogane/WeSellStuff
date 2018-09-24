//requiring dependencies
var express         =   require("express"),
    bodyParser      =   require("body-parser"),
    methodOverride  =   require("method-override")
    mongoose        =   require("mongoose"),
    passport        =   require("passport"),
    localStragtegy  =   require("passport-local");


    
var app = express();