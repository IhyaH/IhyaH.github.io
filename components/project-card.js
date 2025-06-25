// 项目卡片组件
class ProjectCard {
    constructor(config) {
        this.config = config;
    }

    // 渲染项目卡片
    render() {
        return `
            <div class="project-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
                <div class="w-full h-48 bg-gradient-to-br ${this.config.gradient} flex items-center justify-center">
                    <div class="text-center text-white">
                        <div class="text-3xl font-bold mb-2">${this.config.icon}</div>
                        <div class="text-lg font-semibold">${this.config.title}</div>
                        <div class="text-sm opacity-90">${this.config.subtitle}</div>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 text-slate-900">${this.config.projectTitle}</h3>
                    <p class="text-slate-600 mb-4">${this.config.description}</p>
                    <div class="flex items-center justify-between">
                        <span class="text-sm text-slate-500">${this.config.tech}</span>
                        <a href="${this.config.link}" class="text-indigo-600 hover:text-indigo-800 font-semibold">查看详情 &rarr;</a>
                    </div>
                </div>
            </div>
        `;
    }

    // 静态方法：创建多个项目卡片
    static renderMultiple(configs) {
        return configs.map(config => new ProjectCard(config).render()).join('');
    }
}

// 项目数据配置
const projectsData = [
    {
        gradient: 'from-indigo-600 to-purple-700',
        icon: '💰',
        title: '工程预算',
        subtitle: '学习工具',
        projectTitle: '工程预算学习工具',
        description: '一个交互式的工程预算学习平台，帮助学习者掌握预算编制的核心知识和技能。',
        tech: 'HTML / CSS / JS',
        link: 'Engineering-Budget-Study-Tool.html'
    },
    {
        gradient: 'from-slate-700 to-slate-900',
        icon: '🎯',
        title: '交互练习',
        subtitle: '估算平台',
        projectTitle: '工程估算交互练习',
        description: '专为工程估算和预算编制设计的交互式练习平台，提供实战训练。',
        tech: 'HTML / CSS / JS',
        link: 'Interactive-Practice-for-Engineering-Estimation-and-Budgeting.html'
    },
    {
        gradient: 'from-teal-600 to-emerald-700',
        icon: '⏰',
        title: '精美时钟',
        subtitle: '多功能应用',
        projectTitle: '精美时钟',
        description: '一个功能丰富的在线时钟应用，提供多种时钟样式和实用功能。',
        tech: 'HTML / CSS / JS',
        link: 'clock.html'
    }
];

// 导出项目卡片组件和数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ProjectCard, projectsData };
}