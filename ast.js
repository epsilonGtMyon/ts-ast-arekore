const ts = require('typescript')

function compile(fileNames, options) {
  let program = ts.createProgram(fileNames, options);
  
  //cf: https://qiita.com/sisisin/items/eac8381563097334c4e2
  for (const sourceFile of program.getSourceFiles()) {
    if (sourceFile.fileName.substr(-5) === '.d.ts') continue;
    ts.forEachChild(sourceFile, visit);
  }
}

function visit(node) {
  switch(node.kind) {
    case ts.SyntaxKind.ClassDeclaration: {
      console.dir(node);

      showClassMembers(node.members)
      break;
    }
  }
  ts.forEachChild(node, visit);
}

function showClassMembers(members) {
  for(let member of members) {
    console.log(member.name)
    console.log(member.jsDoc)
  }
}

compile(["./src/Hoge.ts"], {
  noEmitOnError: true,
  noImplicitAny: true,
  target: ts.ScriptTarget.ES5,
  module: ts.ModuleKind.CommonJS
});