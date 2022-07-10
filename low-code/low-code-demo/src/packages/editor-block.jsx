// 预览区,小组件
import { defineComponent, computed, inject } from "vue";
export default defineComponent({
  props: {
    block: { type: Object },
  },
  setup(props) {
    // console.log(props.block);
    const blockStyle = computed(() => ({
      top: `${props.block.top}px`,
      left: `${props.block.left}px`,
      zIndex: `${props.block.zIndex}`,
    }));
    const config  = inject('config');
    return () => {
      const component = config.componentMap[props.block.key];
      const renderComponent = component.render();
      return (
        <div class="editor-block" style={blockStyle.value}>
          {renderComponent}
        </div>
      );
    };
  },
});
