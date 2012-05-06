function children(node) {
    switch (node.type) {
      case 'EmptyStatement':
      case 'DebuggerStatement':
      case 'ThisExpression':
      case 'GraphIndexExpression':
      case 'Identifier':
      case 'Literal':
      case 'UnaryOperator':
      case 'BinaryOperator':
      case 'LogicalOperator':
      case 'AssignmentOperator':
      case 'UpdateOperator':
      case 'XMLAnyName':
      case 'XMLText':
      case 'XMLAttribute':
      case 'XMLCdata':
      case 'XMLComment':
      case 'XMLProcessingInstruction':
        return [];

      case 'Program':
      case 'BlockStatement':
        return node.body;

      case 'ExpressionStatement':
      case 'GraphExpression':
      case 'XMLEscape':
        return [node.expression];

      case 'IfStatement':
      case 'ConditionalExpression':
        return [node.test, node.consequent, node.alternate];

      case 'LabeledStatement':
        return [node.body];

      case 'BreakStatement':
      case 'ContinueStatement':
        return [node.label];

      case 'WithStatement':
        return [node.object, node.body];

      case 'SwitchStatement':
        return [node.discriminant].concat(node.cases);

      case 'ReturnStatement':
      case 'ThrowStatement':
      case 'YieldExpression':
        return [node.argument];

      case 'TryStatement':
        return [node.block, node.finalizer].concat(node.handlers);

      case 'WhileStatement':
      case 'DoWhileStatement':
        return [node.test, node.body];

      case 'ForStatement':
        return [node.init, node.test, node.update, node.body];

      case 'ForInStatement':
        return [node.left, node.right, node.body];

      case 'LetStatement':
        return [node.body].concat(node.head);

      case 'FunctionDeclaration':
        return [node.id, node.body].concat(node.params);

      case 'VariableDeclaration':
        return node.declarations;

      case 'VariableDeclarator':
        return [node.id, node.init];

      case 'ArrayExpression':
        return node.elements;

      case 'ObjectExpression':
        return node.properties;

      case 'Property':
        return [node.key, node.value];

      case 'FunctionExpression':
        return [node.id, node.body].concat(node.params);

      case 'SequenceExpression':
        return node.expressions;

      case 'UnaryExpression':
        return [node.operator, node.argument];

      case 'BinaryExpression':
      case 'AssignmentExpression':
      case 'LogicalExpression':
        return [node.operator, node.left, node.right];

      case 'UpdateExpression':
        return [node.operator, node.argument];

      case 'NewExpression':
        return [node.constructor].concat(node.arguments || []);

      case 'CallExpression':
        return [node.callee].concat(node.arguments);

      case 'MemberExpression':
        return [node.object, node.property];

      case 'ComprehensionExpression':
      case 'GeneratorExpression':
        return [node.filter].concat(node.blocks);

      case 'LetExpression':
        return [node.body].concat(node.head);

      case 'ObjectPattern':
        return node.properties;

      case 'ArrayPattern':
        return node.elements;

      case 'SwitchCase':
        return [node.test].concat(node.consequent);

      case 'CatchClause':
        return [node.param, node.guard, node.body];

      case 'ComprehensionBlock':
      case 'XMLQualifiedIdentifier':
      case 'XMLFilterExpression':
        return [node.left, node.right];

      case 'XMLDefaultDeclaration':
        return [node.namespace];

      case 'XMLFunctionQualifiedIdentifier':
        return [node.right];

      case 'XMLAttributeSelector':
        return [node.attribute];

      case 'XMLElement':
      case 'XMLList':
      case 'XMLStartTag':
      case 'XMLEndTag':
      case 'XMLPointTag':
        return node.contents;

      case 'XMLName':
        return typeof node.contents === "string"
             ? []
             : node.contents;
    }
}

exports.children = children;
