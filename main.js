module.exports.loop = function () {
    // 主循环逻辑
    // 1. 处理事件
    // 2. 更新所有creep行为
    // 3. 运行各个模块

    // 示例：更新所有creeps
    for (const creep of Object.values(Game.creeps)) {
        // 调用creep行为，分发到相应的creep模块
    }
};
