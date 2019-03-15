const presets=[
    [
        "@babel/preset-env",
        {
            targets:{
                esmodules: true,
                edge: 10,
                chrome: 30,
                safari: 30,
                firefox: 30,
                opera: 30
            }
        }
    ],
    [
        "@babel/preset-react",
        {
                pragma: "pragma",
                pragmaFrag: "pragmaFrag",
                throwIfNamespace: false
        }
    ]
];


module.exports={
    presets
};