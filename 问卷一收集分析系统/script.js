const STORAGE_KEY = "silver-survey-questionnaire-one";

const OPEN_QUESTIONS = [
  {
    id: "q1",
    section: "一、信息识别经验",
    label: "1. 当您收到陌生电话、短信或微信消息时，您通常会先注意哪些细节来判断其真实性？",
    placeholder: "例如：号码归属地、对方语气、内容格式、是否急着催促您处理等。"
  },
  {
    id: "q2",
    section: "一、信息识别经验",
    label: "2. 您有没有自己总结出的“一看就知道不对劲”的信号？请举例说明。",
    placeholder: "例如：过于热情、限时优惠、要求提供个人信息、让人不要告诉家人等。"
  },
  {
    id: "q3",
    section: "一、信息识别经验",
    label: "3. 面对自称是“银行”“公安”“医院”等机构的来电，您有哪些自己的验证方法？",
    placeholder: "可以写您通常会怎么核实、找谁帮忙、是否会回拨官方电话等。"
  },
  {
    id: "q4",
    section: "二、人际互动判断",
    label: "4. 在与陌生人打交道时，您会观察哪些方面来评估对方的可信度？",
    placeholder: "例如：说话方式、着装、证件、是否急于成交、是否符合常识等。"
  },
  {
    id: "q5",
    section: "二、人际互动判断",
    label: "5. 当亲友向您推荐投资、保健品或理财产品时，您会依据哪些原则来决定是否参与？",
    placeholder: "可以写您是否会看价格、看资质、问家人、看风险、看口碑等。"
  },
  {
    id: "q6",
    section: "二、人际互动判断",
    label: "6. 您是否有一些“宁可错过，也不冒险”的个人准则？请举例说明。",
    placeholder: "例如：不先交钱、不随便转账、不轻易透露验证码、不碰高回报投资等。"
  },
  {
    id: "q7",
    section: "三、决策经验法则",
    label: "7. 在决定是否参与某项活动或购买某产品前，您通常会采取哪些步骤来降低风险？",
    placeholder: "例如：与家人商量、上网查证、观察一段时间、要求看合同或资质等。"
  },
  {
    id: "q8",
    section: "三、决策经验法则",
    label: "8. 您如何判断一项“优惠”或“机会”是否好得不像真的？有哪些自己的衡量标准？",
    placeholder: "可以写您如何判断优惠力度、真实性、代价、是否有陷阱等。"
  },
  {
    id: "q9",
    section: "四、经验积累与分享",
    label: "9. 您过去的经历中，有哪些让您印象深刻的教训或经验，形成了您现在的防骗判断？",
    placeholder: "可以写亲身经历，也可以写家人、邻居或朋友的经历对您的影响。"
  },
  {
    id: "q10",
    section: "四、经验积累与分享",
    label: "10. 您是否会主动与他人讨论或分享防骗心得？通常以什么形式？",
    placeholder: "例如：和老伴聊天、在亲友群提醒、社区交流、给邻居支招等。"
  },
  {
    id: "q11",
    section: "四、经验积累与分享",
    label: "11. 您认为自己在防骗方面最值得分享的一条个人经验是什么？",
    placeholder: "请尽量写成一句您最想提醒别人的经验。"
  },
  {
    id: "q12",
    section: "第三部分：开放思考",
    label: "12. 您认为银发群体在防骗方面有哪些独特的优势？",
    placeholder: "例如：生活经验、人情判断、谨慎习惯、熟人网络等。"
  },
  {
    id: "q13",
    section: "第三部分：开放思考",
    label: "13. 您希望家庭、社区或社会如何更好地支持银发群体的防骗经验交流与能力提升？",
    placeholder: "例如：定期提醒、讲座活动、查询工具、案例宣传、互助小组等。"
  },
  {
    id: "q14",
    section: "第三部分：开放思考",
    label: "14. 其他任何您想分享的见解或建议",
    placeholder: "如果您还有想补充的经验、担忧或建议，可以写在这里。"
  }
];

const DISTRIBUTION_OPTIONS = {
  gender: ["男", "女"],
  ageGroup: ["60-69岁", "70-79岁", "80岁及以上"],
  livingStatus: ["独居", "与配偶同住", "与子女/孙辈同住", "其他"],
  infoSources: [
    "电视/广播",
    "报纸/杂志",
    "亲友交流",
    "社区活动",
    "手机/网络（微信等）",
    "子女/晚辈告知",
    "其他"
  ]
};

const KEYWORD_GROUPS = [
  {
    name: "平台触达",
    className: "tag-platform",
    description: "受访者提到短视频、直播和平台推荐等主要信息接触场景。",
    keywords: [
      "短视频", "直播", "直播间", "主播", "评论区", "刷视频",
      "平台推荐", "视频里", "现身说法", "白大褂", "专家推荐", "下单"
    ]
  },
  {
    name: "辨别困难",
    className: "tag-confusion",
    description: "受访者表达分不清真假、容易相信或需要他人代为判断的内容。",
    keywords: [
      "分不清真假", "分不清", "真假难辨", "看着像真的", "信以为真",
      "容易相信", "容易上当", "被骗", "差点被骗", "弄不明白",
      "不会查", "不会核实", "要靠子女", "看不出来", "分辨不出来"
    ]
  },
  {
    name: "风险信号",
    className: "tag-risk",
    description: "受访者提到的高风险信号、欺骗话术和异常提示。",
    keywords: [
      "陌生电话", "陌生短信", "陌生链接", "验证码", "银行卡", "个人信息", "中奖",
      "账户异常", "限时优惠", "最后机会", "高回报", "零风险", "过于热情", "推销",
      "语速快", "语气急", "外地号码", "不要告诉家人", "保密", "包治百病",
      "免费体验", "紧急情况", "夸大宣传", "假冒", "优惠太大", "催促",
      "限时秒杀", "只剩几单", "马上抢", "虚假宣传"
    ]
  },
  {
    name: "核实动作",
    className: "tag-verify",
    description: "受访者用于确认信息真伪的具体核实动作。",
    keywords: [
      "回拨", "官方电话", "核实", "查证", "上网", "搜索", "问子女", "问家人",
      "商量", "工号", "单位地址", "工作证", "营业执照", "资质", "合同", "派出所",
      "社区", "观察", "核对", "打电话", "问邻居", "问朋友", "正规渠道"
    ]
  },
  {
    name: "谨慎原则",
    className: "tag-principle",
    description: "受访者长期形成的防骗底线、习惯和经验法则。",
    keywords: [
      "不转账", "不点击", "不透露", "先商量", "先核实", "先等等", "谨慎",
      "宁可错过", "不冒险", "不轻信", "先看", "多问", "多比较", "慢一点",
      "不先交钱", "不贪便宜", "冷静", "看清楚", "不冲动", "不着急"
    ]
  },
  {
    name: "经验来源",
    className: "tag-source",
    description: "受访者形成防骗经验的来源与传播场景。",
    keywords: [
      "亲身经历", "朋友", "邻居", "老伴", "子女", "晚辈", "社区讲座", "电视",
      "广播", "微信", "新闻", "案例", "亲友群", "社区群",
      "家人", "听说", "报道", "转发"
    ]
  },
  {
    name: "支持需求",
    className: "tag-support",
    description: "受访者对家庭、社区、工具和社会支持的期待。",
    keywords: [
      "家庭", "社区", "讲座", "提醒", "沟通", "宣传材料", "查询工具", "经验交流",
      "能力提升", "培训", "案例宣传", "支持", "帮助", "讲解", "活动", "互助",
      "子女陪伴", "热线", "咨询", "科普"
    ]
  }
];

const SAMPLE_RESPONSES = [
  {
    id: "sample-1",
    createdAt: "2026-03-19T08:30:00.000Z",
    gender: "女",
    ageGroup: "60-69岁",
    livingStatus: "与配偶同住",
    infoSources: ["电视/广播", "手机/网络（微信等）", "子女/晚辈告知"],
    answers: {
      q1: "我先看是不是外地号码，再听对方语气是不是特别急，内容如果一上来就说账户异常或者中奖，我马上就提高警惕。",
      q2: "凡是过于热情、催着我马上办理、还让我不要告诉家人的，我一听就觉得不对劲。",
      q3: "我一般会先挂断，再自己搜索银行官方电话回拨核实，必要时也会问女儿。",
      q4: "我会看对方说话是不是有条理，有没有工作证，是不是急着让我当场交钱。",
      q5: "亲友推荐理财我也不会马上参与，我会先问家人，再看是不是正规平台。",
      q6: "我的原则是不先交钱，不透露验证码，不碰高回报零风险的项目。",
      q7: "买东西前先跟老伴商量，再查一下商家评价，不着急下单。",
      q8: "优惠如果太夸张，或者时间特别紧，我就怀疑有问题，真正好的东西不会一直催。",
      q9: "以前邻居买过夸大宣传的保健品，花了很多钱没效果，这件事让我记得很深。",
      q10: "我会和家人聊天时提起，也会在社区群里转发防骗文章。",
      q11: "凡是催你快点决定的事情，先停下来查一查。",
      q12: "老年人经历多，对很多事情有生活经验，只要不着急就能看出破绽。",
      q13: "希望社区多办讲座，子女定期提醒，最好有一个方便查询可疑电话和链接的工具。",
      q14: "宣传时不要只讲大道理，最好讲真实案例。"
    }
  },
  {
    id: "sample-2",
    createdAt: "2026-03-18T09:10:00.000Z",
    gender: "男",
    ageGroup: "70-79岁",
    livingStatus: "与子女/孙辈同住",
    infoSources: ["亲友交流", "子女/晚辈告知", "社区活动"],
    answers: {
      q1: "我先看对方是不是直接问身份证号、银行卡号这些个人信息，如果一开口就问这些，我基本不听。",
      q2: "说什么最后机会、现在不办就要吃亏，这种话我现在都不信。",
      q3: "自称公安或者医院的电话，我都会挂断后自己找公开电话问，或者直接问家里孩子。",
      q4: "陌生人要看他有没有证件，讲的话合不合常识，越是吹得太好我越怀疑。",
      q5: "亲友推荐保健品我只听建议，不会随便花钱，先看资质和口碑。",
      q6: "宁可错过也不冒险，特别是先交钱的活动一律不参加。",
      q7: "我通常会观察一段时间，问朋友有没有类似经历，再决定。",
      q8: "优惠要看有没有正规商家背书，还要看是不是隐藏别的收费。",
      q9: "以前差点被冒充银行客服骗验证码，好在孩子及时提醒，从那以后我不再轻信陌生电话。",
      q10: "会和邻居交流，社区开讲座我也会去听。",
      q11: "不懂就问，不急着做决定。",
      q12: "很多老年人看人看事有经验，尤其对不正常的热情会有感觉。",
      q13: "希望社区做得更具体一点，比如教我们怎么看合同、怎么看资质。",
      q14: "子女不要只说别信，最好说明白为什么是假。"
    }
  },
  {
    id: "sample-3",
    createdAt: "2026-03-17T14:25:00.000Z",
    gender: "女",
    ageGroup: "70-79岁",
    livingStatus: "独居",
    infoSources: ["电视/广播", "亲友交流", "社区活动"],
    answers: {
      q1: "我会注意号码是不是陌生，内容是不是太吓人，尤其说我家人出事、账户有问题这种，我先冷静。",
      q2: "如果对方一直催促，还不让我联系家人，我就认定有问题。",
      q3: "官方机构来电我一般不会直接相信，会记下信息后去社区或者派出所问。",
      q4: "看对方眼神、说话是不是自然，有没有拿出工作证，推销得太急我就不信。",
      q5: "我不太参与投资，保健品也不会乱买，最多问问老伴以前的朋友是什么看法。",
      q6: "不点击陌生链接，不买包治百病的东西，不把银行卡密码告诉任何人。",
      q7: "我会跟孩子通个电话，再多观察几天。",
      q8: "便宜得离谱、说得太神奇、又不让慢慢想的，我觉得都不可靠。",
      q9: "身边有人被免费体检引去买高价产品，后来退钱很麻烦，我就更加谨慎。",
      q10: "我偶尔会在亲友群提醒，也会和老朋友聊天时说这些事。",
      q11: "记住一句话，天上不会掉馅饼。",
      q12: "老年人如果保持谨慎，其实比年轻人更愿意多问一句、多想一步。",
      q13: "希望能有简单易懂的大字版宣传材料，也希望社区多上门提醒独居老人。",
      q14: "独居老人更需要有人定期沟通。"
    }
  },
  {
    id: "sample-4",
    createdAt: "2026-03-16T11:05:00.000Z",
    gender: "男",
    ageGroup: "60-69岁",
    livingStatus: "与配偶同住",
    infoSources: ["手机/网络（微信等）", "亲友交流"],
    answers: {
      q1: "陌生微信消息我会先看头像和内容是不是正规，有没有链接，有没有让我填个人信息。",
      q2: "过分强调限时优惠、名额只剩几个、老师专家推荐，我就会多留个心眼。",
      q3: "我会要求对方说工号和单位地址，然后自己去官方渠道核实。",
      q4: "推销员我重点看他是否主动出示营业执照，是否总想让我马上付款。",
      q5: "理财类我不会因为熟人推荐就信，会自己上网查证，看看合同条款。",
      q6: "我的底线是不转账给私人账户，不做高回报投资。",
      q7: "任何产品先看资质，再比较价格，然后和家人商量。",
      q8: "如果优惠背后还有很多附加条件，我就认为不划算，也可能有陷阱。",
      q9: "我以前买过夸大宣传的养生器械，后来退货很折腾，所以现在特别重视资质和售后。",
      q10: "经常在朋友群里提醒，有时把新闻案例发给他们看。",
      q11: "正规渠道比别人嘴上说得好更重要。",
      q12: "老年人熟悉生活常识，很多过分吹嘘的产品其实一听就能分辨。",
      q13: "希望平台和社区都提供查询工具，教会老人怎么查企业信息和投诉渠道。",
      q14: "案例宣传最好贴近日常买药、买保健品这些场景。"
    }
  },
  {
    id: "sample-5",
    createdAt: "2026-03-15T15:40:00.000Z",
    gender: "女",
    ageGroup: "80岁及以上",
    livingStatus: "与子女/孙辈同住",
    infoSources: ["子女/晚辈告知", "电视/广播"],
    answers: {
      q1: "电话里如果普通话不标准，语气很急，又让我马上处理，我就先不理。",
      q2: "一听说中奖、返钱、免费送，我就觉得要小心。",
      q3: "这类电话我一般直接挂断，等孩子回来帮我看。",
      q4: "我主要看对方是不是有礼貌，讲的话是不是合情合理，不合理就不信。",
      q5: "亲友推荐东西我会听，但不会随便花钱，特别是保健品。",
      q6: "不贪便宜，不去占这种小便宜。",
      q7: "我会先问孩子，再等等看别人怎么说。",
      q8: "太便宜的我不敢买，怕后面还有别的花销。",
      q9: "以前有人说免费体检，后来一直推销高价产品，这让我记住天下没有免费的午餐。",
      q10: "我不太主动说，但有人问我我会提醒。",
      q11: "不清楚的事先找家里人商量。",
      q12: "很多老人比较节省，也比较谨慎，只要有人提醒一下就不容易上当。",
      q13: "希望子女多一点耐心，社区宣传字大一点、讲得慢一点。",
      q14: "最好能有面对面的讲解。"
    }
  },
  {
    id: "sample-6",
    createdAt: "2026-03-14T10:00:00.000Z",
    gender: "男",
    ageGroup: "70-79岁",
    livingStatus: "独居",
    infoSources: ["社区活动", "电视/广播", "亲友交流"],
    answers: {
      q1: "我会先看信息格式正不正规，如果错别字很多、内容夸张，我就不信。",
      q2: "说得太好、太神、太着急的，大多有问题。",
      q3: "我会自己打电话到银行或医院总机问，不会按对方给的号码回拨。",
      q4: "陌生人主要看是不是主动拿证件，是否回避问题，是否催我单独处理。",
      q5: "我会把风险放在第一位，朋友推荐也不能代替自己判断。",
      q6: "不向任何人透露验证码，不当场做决定。",
      q7: "先查证，再找熟人问问，最后观察几天。",
      q8: "好机会如果真的靠谱，不会怕你核实，所以我一定先核实。",
      q9: "曾经有人冒充客服说退款，我差点点了链接，后来社区讲座讲过类似案例，我就记住了。",
      q10: "我愿意分享，特别是给独居的老朋友提醒。",
      q11: "越让你急，越要慢。",
      q12: "老人之间互相提醒效果好，因为大家更容易听进去。",
      q13: "希望有老年人经验交流小组，也希望社区有热线帮忙判断可疑信息。",
      q14: "独居老人最好建立重点提醒名单。"
    }
  }
];

document.addEventListener("DOMContentLoaded", () => {
  renderQuestionFields();
  bindEvents();
  ensureInitialResponses();
  renderDashboard();
});

function renderQuestionFields() {
  const container = document.getElementById("questionnaire-fields");
  let currentSection = "";
  const blocks = [];

  OPEN_QUESTIONS.forEach((question) => {
    if (question.section !== currentSection) {
      currentSection = question.section;
      blocks.push(`<h4 class="question-section-title">${currentSection}</h4>`);
    }

    blocks.push(`
      <div class="question-item">
        <label for="${question.id}">${question.label}</label>
        <textarea id="${question.id}" name="${question.id}" placeholder="${question.placeholder}"></textarea>
      </div>
    `);
  });

  container.innerHTML = blocks.join("");
}

function bindEvents() {
  document.getElementById("survey-form").addEventListener("submit", handleSubmit);
  document.getElementById("reset-form").addEventListener("click", resetCurrentForm);
  document.getElementById("load-samples").addEventListener("click", loadSampleResponses);
  document.getElementById("export-json").addEventListener("click", exportAsJson);
  document.getElementById("export-csv").addEventListener("click", exportAsCsv);
  document.getElementById("clear-data").addEventListener("click", clearAllData);
}

function handleSubmit(event) {
  event.preventDefault();

  const response = collectFormData();
  if (!response.valid) {
    showMessage(response.message, true);
    return;
  }

  const responses = getResponses();
  responses.unshift(response.data);
  saveResponses(responses);
  event.target.reset();
  showMessage("问卷已保存到本地，并已更新右侧统计分析。");
  renderDashboard();
}

function collectFormData() {
  const form = document.getElementById("survey-form");
  const formData = new FormData(form);

  const base = {
    gender: (formData.get("gender") || "").trim(),
    ageGroup: (formData.get("ageGroup") || "").trim(),
    livingStatus: (formData.get("livingStatus") || "").trim(),
    infoSources: formData.getAll("infoSources").map((item) => item.trim()).filter(Boolean)
  };

  if (!base.gender || !base.ageGroup || !base.livingStatus) {
    return {
      valid: false,
      message: "请先完整填写性别、年龄段和居住情况。"
    };
  }

  const answers = {};
  let filledCount = 0;

  OPEN_QUESTIONS.forEach((question) => {
    const value = (formData.get(question.id) || "").trim();
    answers[question.id] = value;
    if (value) {
      filledCount += 1;
    }
  });

  if (filledCount < 3) {
    return {
      valid: false,
      message: "开放题建议至少填写 3 题以上，这样后续关键词分析才更有意义。"
    };
  }

  return {
    valid: true,
    data: {
      id: createId(),
      createdAt: new Date().toISOString(),
      ...base,
      answers
    }
  };
}

function resetCurrentForm() {
  document.getElementById("survey-form").reset();
  showMessage("当前填写内容已清空。");
}

function loadSampleResponses() {
  const sampleResponses = cloneSampleResponses();
  const current = getResponses();
  const confirmText = current.length
    ? `重载 ${sampleResponses.length} 份模拟数据会覆盖当前浏览器里保存的数据，是否继续？`
    : `是否加载 ${sampleResponses.length} 份模拟数据，用于演示关键词统计和分析效果？`;

  if (!window.confirm(confirmText)) {
    return;
  }

  saveResponses(sampleResponses);
  showMessage(`已载入 ${sampleResponses.length} 份模拟问卷数据。`);
  renderDashboard();
}

function ensureInitialResponses() {
  const current = getResponses();
  const sampleResponses = cloneSampleResponses();

  if (!current.length && sampleResponses.length >= 35) {
    saveResponses(sampleResponses);
    showMessage(`已自动装载 ${sampleResponses.length} 份模拟问卷数据，可直接查看分析结果。`);
    return;
  }

  const onlyOldSampleData = current.length
    && current.every((item) => String(item.id || "").startsWith("sample-"))
    && !current.some((item) => String(item.id || "").startsWith("sample-trend-"));

  const trendSampleNeedsDateRefresh = current.length
    && current.every((item) => String(item.id || "").startsWith("sample-trend-"))
    && current.some((item) => String(item.createdAt || "") >= "2026-03-01");

  if (onlyOldSampleData && sampleResponses.length >= 35) {
    saveResponses(sampleResponses);
    showMessage(`已自动将旧版模拟数据更新为 ${sampleResponses.length} 份新趋势样本。`);
    return;
  }

  if (trendSampleNeedsDateRefresh && sampleResponses.length >= 35) {
    saveResponses(sampleResponses);
    showMessage(`已自动把模拟样本提交时间调整到 3 月 1 日之前。`);
  }
}

function exportAsJson() {
  const responses = getResponses();
  if (!responses.length) {
    showMessage("当前没有可导出的数据。", true);
    return;
  }

  const content = JSON.stringify(responses, null, 2);
  downloadFile(content, "问卷一数据.json", "application/json;charset=utf-8");
  showMessage("JSON 数据已准备下载。");
}

function exportAsCsv() {
  const responses = getResponses();
  if (!responses.length) {
    showMessage("当前没有可导出的数据。", true);
    return;
  }

  const headers = [
    "提交时间",
    "性别",
    "年龄段",
    "居住情况",
    "信息来源",
    ...OPEN_QUESTIONS.map((item) => item.label)
  ];

  const rows = responses.map((response) => {
    const answerCells = OPEN_QUESTIONS.map((item) => response.answers[item.id] || "");
    return [
      formatTime(response.createdAt),
      response.gender,
      response.ageGroup,
      response.livingStatus,
      response.infoSources.join(" / "),
      ...answerCells
    ];
  });

  const csvContent = [headers, ...rows]
    .map((row) => row.map(csvEscape).join(","))
    .join("\n");

  downloadFile(csvContent, "问卷一数据.csv", "text/csv;charset=utf-8");
  showMessage("CSV 数据已准备下载。");
}

function clearAllData() {
  const responses = getResponses();
  if (!responses.length) {
    showMessage("当前没有可清空的数据。", true);
    return;
  }

  if (!window.confirm("确认清空当前浏览器里保存的全部问卷数据吗？此操作无法撤销。")) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  showMessage("本地数据已清空。");
  renderDashboard();
}

function renderDashboard() {
  const responses = getResponses();
  const analysis = analyzeResponses(responses);

  renderMetrics(analysis);
  renderBars("gender-bars", analysis.genderDistribution);
  renderBars("age-bars", analysis.ageDistribution);
  renderBars("living-bars", analysis.livingDistribution);
  renderBars("source-bars", analysis.sourceDistribution);
  renderTagCloud(analysis.topKeywords);
  renderKeywordTable(analysis.topKeywords);
  renderThemes(analysis.categorySummary);
  renderInsights(analysis.insights);
  renderQuestionStats(analysis.questionStats);
  renderResponses(responses);
}

function analyzeResponses(responses) {
  const allTexts = responses.flatMap((response) => Object.values(response.answers || {}));
  const mergedText = allTexts.join("\n");
  const totalCharacters = allTexts.reduce((sum, text) => sum + text.length, 0);

  const genderDistribution = buildDistribution(responses, "gender", DISTRIBUTION_OPTIONS.gender);
  const ageDistribution = buildDistribution(responses, "ageGroup", DISTRIBUTION_OPTIONS.ageGroup);
  const livingDistribution = buildDistribution(responses, "livingStatus", DISTRIBUTION_OPTIONS.livingStatus);
  const sourceDistribution = buildArrayDistribution(responses, "infoSources", DISTRIBUTION_OPTIONS.infoSources);
  const keywordSummary = buildKeywordSummary(mergedText);
  const categorySummary = buildCategorySummary(responses);
  const questionStats = buildQuestionStats(responses);

  return {
    totalResponses: responses.length,
    averageCharacters: responses.length ? Math.round(totalCharacters / responses.length) : 0,
    topAgeGroup: findTopLabel(ageDistribution),
    topSource: findTopLabel(sourceDistribution),
    topKeyword: keywordSummary[0] ? keywordSummary[0].keyword : "暂无",
    genderDistribution,
    ageDistribution,
    livingDistribution,
    sourceDistribution,
    topKeywords: keywordSummary.slice(0, 18),
    categorySummary,
    questionStats,
    insights: buildInsights({
      responses,
      ageDistribution,
      sourceDistribution,
      categorySummary,
      keywordSummary,
      questionStats
    })
  };
}

function buildDistribution(responses, field, options) {
  return options.map((label) => {
    const count = responses.filter((item) => item[field] === label).length;
    return { label, count };
  });
}

function buildArrayDistribution(responses, field, options) {
  return options.map((label) => {
    const count = responses.filter((item) => (item[field] || []).includes(label)).length;
    return { label, count };
  });
}

function buildKeywordSummary(mergedText) {
  const summary = [];

  KEYWORD_GROUPS.forEach((group) => {
    group.keywords.forEach((keyword) => {
      const count = countOccurrences(mergedText, keyword);
      if (count > 0) {
        summary.push({
          keyword,
          count,
          group: group.name,
          className: group.className
        });
      }
    });
  });

  return summary.sort((a, b) => b.count - a.count || a.keyword.localeCompare(b.keyword, "zh-CN"));
}

function buildCategorySummary(responses) {
  return KEYWORD_GROUPS.map((group) => {
    let hitCount = 0;
    let totalHits = 0;
    const keywordHits = [];

    responses.forEach((response) => {
      const responseText = Object.values(response.answers || {}).join("\n");
      let responseMatched = false;

      group.keywords.forEach((keyword) => {
        const count = countOccurrences(responseText, keyword);
        if (count > 0) {
          responseMatched = true;
          totalHits += count;
          keywordHits.push({ keyword, count });
        }
      });

      if (responseMatched) {
        hitCount += 1;
      }
    });

    const topTerms = aggregateKeywordHits(keywordHits).slice(0, 4).map((item) => item.keyword);

    return {
      name: group.name,
      description: group.description,
      count: hitCount,
      totalHits,
      topTerms,
      ratio: responses.length ? Math.round((hitCount / responses.length) * 100) : 0
    };
  });
}

function buildQuestionStats(responses) {
  return OPEN_QUESTIONS.map((question) => {
    const texts = responses.map((response) => response.answers[question.id] || "");
    const filledTexts = texts.filter(Boolean);
    const totalLength = filledTexts.reduce((sum, text) => sum + text.length, 0);
    const completionRate = responses.length ? Math.round((filledTexts.length / responses.length) * 100) : 0;

    return {
      id: question.id,
      label: question.label,
      shortLabel: question.label.replace(/^\d+\.\s*/, "").slice(0, 18),
      completionCount: filledTexts.length,
      completionRate,
      averageLength: filledTexts.length ? Math.round(totalLength / filledTexts.length) : 0
    };
  });
}

function buildInsights({ responses, ageDistribution, sourceDistribution, categorySummary, keywordSummary, questionStats }) {
  if (!responses.length) {
    return [
      "当前还没有录入数据，可以先提交真实问卷，或点击“加载示例数据”查看分析效果。",
      "问卷一以开放题为核心，建议尽量鼓励受访者写出具体经历、判断方法和典型案例。",
      "这份问卷更适合提炼老人常见的风险信号、核实动作、谨慎原则和支持需求，而不是单纯做总分统计。"
    ];
  }

  const insights = [];
  const topAge = findTopLabel(ageDistribution);
  const topSource = findTopLabel(sourceDistribution);
  const sortedCategories = [...categorySummary].sort((a, b) => b.count - a.count);
  const topCategory = sortedCategories[0];
  const topKeyword = keywordSummary[0];
  const longestQuestion = [...questionStats].sort((a, b) => b.averageLength - a.averageLength)[0];
  const platformCategory = categorySummary.find((item) => item.name === "平台触达");
  const confusionCategory = categorySummary.find((item) => item.name === "辨别困难");

  insights.push(`当前样本中占比最高的年龄段是“${topAge}”，最常见的信息来源是“${topSource}”。`);

  if (topSource === "手机/网络（微信等）") {
    insights.push("当前样本里“手机/网络（微信等）”明显排在首位，结合开放题内容，短视频和直播平台是受访者接触信息的重要入口。");
  }

  if (topCategory && topCategory.count > 0) {
    insights.push(`在开放题语料里，出现最广泛的主题是“${topCategory.name}”，说明这部分内容最容易被受访者主动提及。`);
  }

  if (topKeyword) {
    insights.push(`当前最高频关键词是“${topKeyword.keyword}”，可以作为后续人工编码和访谈追问的重点线索。`);
  }

  if (keywordSummary.some((item) => ["子女", "家人", "问子女", "问家人"].includes(item.keyword))) {
    insights.push("家庭成员在风险核实中作用明显，后续可以单独抽取“代际提醒/代际校准”作为分析维度。");
  }

  if (platformCategory && platformCategory.ratio >= 60) {
    insights.push("大量受访者直接提到“短视频”“直播”“主播”“评论区”等场景，说明平台化信息输入特征很强。");
  }

  if (confusionCategory && confusionCategory.ratio >= 50) {
    insights.push("不少受访者明确提到“分不清真假”“看着像真的”或“要靠子女判断”，显示出独立辨别能力偏弱，存在较高受骗风险。");
  }

  if (keywordSummary.some((item) => ["限时优惠", "高回报", "中奖", "催促", "紧急情况"].includes(item.keyword))) {
    insights.push("紧迫式话术和利益诱导类信号较突出，适合汇总为“高压触发器”专题。");
  }

  if (longestQuestion && longestQuestion.averageLength > 0) {
    insights.push(`从平均文本长度看，“${longestQuestion.shortLabel}”最容易引出具体叙事，建议后续继续强化这一类题目的案例采集价值。`);
  }

  return insights.slice(0, 6);
}

function renderMetrics(analysis) {
  const container = document.getElementById("metric-grid");
  container.innerHTML = `
    <article class="metric-card accent-teal">
      <span class="metric-label">已收集样本</span>
      <strong class="metric-value">${analysis.totalResponses}</strong>
    </article>
    <article class="metric-card accent-amber">
      <span class="metric-label">人均文本字数</span>
      <strong class="metric-value">${analysis.averageCharacters}</strong>
    </article>
    <article class="metric-card accent-stone">
      <span class="metric-label">最集中年龄段</span>
      <strong class="metric-value">${analysis.topAgeGroup}</strong>
    </article>
    <article class="metric-card accent-teal">
      <span class="metric-label">当前最高频热词</span>
      <strong class="metric-value">${analysis.topKeyword}</strong>
    </article>
  `;
}

function renderBars(containerId, items) {
  const container = document.getElementById(containerId);

  if (!items.length || items.every((item) => item.count === 0)) {
    container.innerHTML = `<div class="empty-state">暂无分布数据。</div>`;
    return;
  }

  const max = Math.max(...items.map((item) => item.count), 1);
  container.innerHTML = items
    .map((item) => `
      <div class="bar-item">
        <div class="bar-item-head">
          <strong>${item.label}</strong>
          <span>${item.count}</span>
        </div>
        <div class="bar-track">
          <div class="bar-fill" style="width: ${(item.count / max) * 100}%"></div>
        </div>
      </div>
    `)
    .join("");
}

function renderTagCloud(items) {
  const container = document.getElementById("tag-cloud");

  if (!items.length) {
    container.innerHTML = `<div class="empty-state">当前还没有可展示的热词。先录入问卷或加载示例数据后，这里会自动生成热词云墙。</div>`;
    return;
  }

  const max = Math.max(...items.map((item) => item.count), 1);
  container.innerHTML = items
    .map((item) => {
      const size = 14 + (item.count / max) * 20;
      return `
        <span class="tag-item ${item.className}" style="font-size: ${size.toFixed(1)}px">
          ${item.keyword}
          <span class="tag-count">${item.count}</span>
        </span>
      `;
    })
    .join("");
}

function renderKeywordTable(items) {
  const container = document.getElementById("keyword-table");

  if (!items.length) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = items.slice(0, 12).map((item, index) => `
    <div class="keyword-row">
      <div>
        <strong>${index + 1}. ${item.keyword}</strong>
      </div>
      <div class="keyword-meta">
        <span class="keyword-group">${item.group}</span>
        <span>${item.count} 次</span>
      </div>
    </div>
  `).join("");
}

function renderThemes(items) {
  const container = document.getElementById("theme-cards");

  if (!items.length || items.every((item) => item.count === 0)) {
    container.innerHTML = `<div class="empty-state">暂无主题归类结果。</div>`;
    return;
  }

  container.innerHTML = items
    .map((item) => `
      <article class="theme-card">
        <div class="response-head">
          <h3>${item.name}</h3>
          <span class="theme-badge">提及率 ${item.ratio}%</span>
        </div>
        <p>${item.description}</p>
        <p>命中样本数：${item.count} / 关键词总命中：${item.totalHits}</p>
        <p>代表词：${item.topTerms.length ? item.topTerms.join("、") : "暂无"}</p>
      </article>
    `)
    .join("");
}

function renderInsights(items) {
  const container = document.getElementById("analysis-insights");
  container.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderQuestionStats(items) {
  const container = document.getElementById("question-stats");

  if (!items.length) {
    container.innerHTML = `<div class="empty-state">暂无题目统计。</div>`;
    return;
  }

  container.innerHTML = items
    .map((item) => `
      <div class="question-row">
        <div class="question-head">
          <strong>${item.label}</strong>
          <span>${item.completionRate}%</span>
        </div>
        <div class="question-track">
          <div class="question-fill" style="width: ${item.completionRate}%"></div>
        </div>
        <div class="question-meta">
          已作答 ${item.completionCount} 份，平均文本长度 ${item.averageLength} 字
        </div>
      </div>
    `)
    .join("");
}

function renderResponses(responses) {
  const container = document.getElementById("response-list");

  if (!responses.length) {
    container.innerHTML = `<div class="empty-state">还没有问卷记录。提交第一份问卷后，这里会展示最近的原始内容摘要。</div>`;
    return;
  }

  container.innerHTML = responses.slice(0, 8).map((response) => {
    const preview = getPreviewText(response.answers);
    const answerBlocks = OPEN_QUESTIONS
      .filter((question) => response.answers[question.id])
      .slice(0, 6)
      .map((question) => `
        <div class="response-answer">
          <strong>${question.label}</strong>
          <span>${escapeHtml(response.answers[question.id])}</span>
        </div>
      `)
      .join("");

    return `
      <details class="response-card">
        <summary>
          <div class="response-head">
            <div>
              <div class="response-title">${response.gender} / ${response.ageGroup} / ${response.livingStatus}</div>
              <div class="response-meta">
                提交时间：${formatTime(response.createdAt)}<br>
                信息来源：${response.infoSources.join("、") || "未填写"}<br>
                摘要：${escapeHtml(preview)}
              </div>
            </div>
            <span class="theme-badge">查看详情</span>
          </div>
        </summary>
        <div class="response-body">${answerBlocks || "<div class='empty-state'>当前记录暂无可展示文本。</div>"}</div>
      </details>
    `;
  }).join("");
}

function getResponses() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error("读取本地数据失败：", error);
    return [];
  }
}

function saveResponses(responses) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(responses));
}

function showMessage(message, isError = false) {
  const element = document.getElementById("form-message");
  element.textContent = message;
  element.style.color = isError ? "#9d5148" : "#0f766e";
}

function downloadFile(content, fileName, mimeType) {
  const blob = new Blob(["\uFEFF" + content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function csvEscape(value) {
  const safeValue = String(value ?? "").replace(/"/g, "\"\"");
  return `"${safeValue.replace(/\r?\n/g, " ")}"`;
}

function createId() {
  return `resp-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

function formatTime(value) {
  return new Date(value).toLocaleString("zh-CN", {
    hour12: false
  });
}

function countOccurrences(text, keyword) {
  if (!text || !keyword) {
    return 0;
  }

  let count = 0;
  let index = 0;

  while (index > -1) {
    index = text.indexOf(keyword, index);
    if (index > -1) {
      count += 1;
      index += keyword.length;
    }
  }

  return count;
}

function aggregateKeywordHits(items) {
  const map = new Map();

  items.forEach((item) => {
    map.set(item.keyword, (map.get(item.keyword) || 0) + item.count);
  });

  return [...map.entries()]
    .map(([keyword, count]) => ({ keyword, count }))
    .sort((a, b) => b.count - a.count || a.keyword.localeCompare(b.keyword, "zh-CN"));
}

function findTopLabel(items) {
  if (!items.length) {
    return "暂无";
  }

  const top = [...items].sort((a, b) => b.count - a.count)[0];
  return top && top.count > 0 ? top.label : "暂无";
}

function getPreviewText(answers) {
  const firstAnswer = Object.values(answers).find(Boolean) || "暂无摘要";
  return firstAnswer.length > 48 ? `${firstAnswer.slice(0, 48)}...` : firstAnswer;
}

function cloneSampleResponses() {
  const preferredResponses = Array.isArray(window.SAMPLE_RESPONSES_DATA) && window.SAMPLE_RESPONSES_DATA.length
    ? window.SAMPLE_RESPONSES_DATA
    : SAMPLE_RESPONSES;

  return JSON.parse(JSON.stringify(preferredResponses));
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
