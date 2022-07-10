// 主页面，分三个区域
import { defineComponent, computed, inject, ref } from "vue";
import "./editor.scss";
import editorBlock from "./editor-block";

export default defineComponent({
  props: {
    modelValue: { type: Object },
  },
  setup(props) {
    const data = computed({
      get() {
        return props.modelValue;
      },
    });
    // console.log(data.value);
    const containerStyle = computed(() => ({
      width: data.value.container.width + "px",
      height: data.value.container.height + "px",
    }));

    const config = inject("config");

    // 拖拽的目标元素
    const containerRef = ref(null);
    // 拖拽开始
    const dragStart = (e, component) => {
      console.log(e, component);
      console.log(containerRef.value);
    };

    return () => (
      <div class="editor">
        <div class="editor-left">
          {config.componentList.map((component) => (
            <div
              className="editor-left-item"
              draggable
              ondragstart={(e) => dragStart(e, component)}
            >
              <span>{component.label}</span>
              <div>{component.preview()}</div>
            </div>
          ))}
        </div>
        <div class="editor-top">菜单</div>
        <div class="editor-right">右侧</div>
        <div class="editor-container">
          {/*滚动条*/}
          <div class="editor-container-canvas">
            <div
              className="editor-container-canvas_content"
              style={containerStyle.value}
              ref={containerRef}
            >
              {data.value.blocks.map((block) => (
                <editorBlock block={block}></editorBlock>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  },
});
