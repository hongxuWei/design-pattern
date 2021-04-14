// 创建一个接口
interface Shape {
  draw: () => void;
}

// 辅助工具
enum ShapeType {
  "长方形" = 1,
  "圆形"
}

// 创建接口实现的实体类
class Rectangle implements Shape {
  draw = () => {
    console.log("draw Rectangle");
  }
}

class Circle implements Shape {
  draw = () => {
    console.log("draw Circle");
  }
}

// 创建一个工厂，生成实体类的对象
const shapeFactory = (type: ShapeType) => {
  if (type === ShapeType.长方形) {
    return new Rectangle();
  } else if (type === ShapeType.圆形) {
    return new Circle();
  }
  return null
}

// 使用该工程，通过传递类型信息获取实体类的对象
const shape1 = shapeFactory(ShapeType.长方形);
shape1.draw(); // draw Rectangle

const shape2 = shapeFactory(ShapeType.圆形);
shape2.draw(); // draw Circle

