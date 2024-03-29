declare module powerbi.extensibility.utils.test {
    const DefaultWaitForRender: number;
}
declare module powerbi.extensibility.utils.test.mocks {
    import VisualObjectInstancesToPersist = powerbi.VisualObjectInstancesToPersist;
    import ISelectionIdBuilder = powerbi.visuals.ISelectionIdBuilder;
    import ISelectionManager = powerbi.extensibility.ISelectionManager;
    import IColorPalette = powerbi.extensibility.IColorPalette;
    import IVisualHost = powerbi.extensibility.visual.IVisualHost;
    class MockIVisualHost implements IVisualHost {
        private colorPaletteInstance;
        private selectionManager;
        constructor(colorPalette?: IColorPalette, selectionManager?: ISelectionManager);
        createSelectionIdBuilder(): ISelectionIdBuilder;
        createSelectionManager(): ISelectionManager;
        colorPalette: IColorPalette;
        persistProperties(changes: VisualObjectInstancesToPersist): void;
    }
}
declare module powerbi.extensibility.utils.test.mocks {
    import IColorPalette = powerbi.extensibility.IColorPalette;
    class MockIColorPalette implements IColorPalette {
        /**
         * This array represents the default colors of the IColorPalette.
         */
        private static DefaultColors;
        private colors;
        constructor(colors?: IColorInfo[]);
        getColor(key: string): IColorInfo;
    }
}
declare module powerbi.extensibility.utils.test.mocks {
    import Selector = powerbi.data.Selector;
    import ISelectionId = powerbi.visuals.ISelectionId;
    class MockISelectionId implements ISelectionId {
        private key;
        constructor(key: string);
        equals(other: ISelectionId): boolean;
        includes(other: ISelectionId, ignoreHighlight?: boolean): boolean;
        getKey(): string;
        getSelector(): Selector;
        getSelectorsByColumn(): Selector;
        hasIdentity(): boolean;
    }
}
declare module powerbi.extensibility.utils.test.mocks {
    import DataViewCategoryColumn = powerbi.DataViewCategoryColumn;
    import DataViewValueColumn = powerbi.DataViewValueColumn;
    import DataViewValueColumnGroup = powerbi.DataViewValueColumnGroup;
    import DataViewValueColumns = powerbi.DataViewValueColumns;
    import ISelectionIdBuilder = powerbi.visuals.ISelectionIdBuilder;
    import ISelectionId = powerbi.visuals.ISelectionId;
    class MockISelectionIdBuilder implements ISelectionIdBuilder {
        withCategory(categoryColumn: DataViewCategoryColumn, index: number): this;
        withSeries(seriesColumn: DataViewValueColumns, valueColumn: DataViewValueColumn | DataViewValueColumnGroup): this;
        withMeasure(measureId: string): this;
        createSelectionId(): ISelectionId;
    }
}
declare module powerbi.extensibility.utils.test.mocks {
    import IPromise = powerbi.IPromise;
    import ISelectionId = powerbi.visuals.ISelectionId;
    import ISelectionManager = powerbi.extensibility.ISelectionManager;
    class MockISelectionManager implements ISelectionManager {
        private selectionIds;
        select(selectionId: ISelectionId | ISelectionId[], multiSelect?: boolean): IPromise<ISelectionId[]>;
        hasSelection(): boolean;
        clear(): IPromise<{}>;
        getSelectionIds(): ISelectionId[];
        containsSelection(id: ISelectionId): boolean;
    }
}
declare module powerbi.extensibility.utils.test.mocks {
    import IColorInfo = powerbi.IColorInfo;
    import ISelectionIdBuilder = powerbi.visuals.ISelectionIdBuilder;
    import ISelectionId = powerbi.visuals.ISelectionId;
    import IColorPalette = powerbi.extensibility.IColorPalette;
    import ISelectionManager = powerbi.extensibility.ISelectionManager;
    import IVisualHost = powerbi.extensibility.visual.IVisualHost;
    function createVisualHost(): IVisualHost;
    function createColorPalette(colors?: IColorInfo[]): IColorPalette;
    function createSelectionId(key?: string): ISelectionId;
    function createSelectionIdBuilder(): ISelectionIdBuilder;
    function createSelectionManager(): ISelectionManager;
}
declare module powerbi.extensibility.utils.test.helpers {
    function testDom(height: number | string, width: number | string): JQuery;
    enum ClickEventType {
        Default = 0,
        CtrlKey = 1,
        AltKey = 2,
        ShiftKey = 4,
        MetaKey = 8,
    }
    enum MouseEventType {
        click = 0,
        mousedown = 1,
        mouseup = 2,
        mouseover = 3,
        mousemove = 4,
        mouseout = 5,
    }
    /**
     * Creates mouse event
     * @param eventType {ClickEventType}.
     * @param x clientX.
     * @param y clientY.
     * @param eventName {string} Event name e.g click, mousedown ...
     */
    function createMouseEvent(mouseEventType: MouseEventType, eventType: ClickEventType, x: number, y: number, button?: number): MouseEvent;
    function createTouchStartEvent(touchList?: TouchList): UIEvent;
    function createTouchMoveEvent(touchList?: TouchList): UIEvent;
    function createTouchEndEvent(touchList?: TouchList): UIEvent;
    function createContextMenuEvent(x: number, y: number): MouseEvent;
    function createTouchesList(touches: Touch[]): TouchList;
    function createTouch(x: number, y: number, element: JQuery, id?: number): Touch;
    /**
     * Forces all D3 transitions to complete.
     * Normally, zero-delay transitions are executed after an instantaneous delay (<10ms).
     * This can cause a brief flicker if the browser renders the page twice: once at the end of the first event loop,
     * then again immediately on the first timer callback. By flushing the timer queue at the end of the first event loop,
     * you can run any zero-delay transitions immediately and avoid the flicker.
     *
     * These flickers are noticable on IE, and with a large number of webviews(not recommend you ever do this) on iOS.
     */
    function flushAllD3Transitions(): void;
}
interface JQuery {
    d3Click(x: number, y: number, eventType?: powerbi.extensibility.utils.test.helpers.ClickEventType, button?: number): void;
    d3TouchStart(touchList?: TouchList): void;
    d3TouchMove(touchList?: TouchList): void;
    d3TouchEnd(touchList?: TouchList): void;
    d3ContextMenu(x: number, y: number): void;
    d3MouseDown(x: number, y: number, eventType?: powerbi.extensibility.utils.test.helpers.ClickEventType, button?: number): void;
    d3MouseUp(x: number, y: number, eventType?: powerbi.extensibility.utils.test.helpers.ClickEventType, button?: number): void;
    d3MouseOver(x: number, y: number, eventType?: powerbi.extensibility.utils.test.helpers.ClickEventType, button?: number): void;
    d3MouseMove(x: number, y: number, eventType?: powerbi.extensibility.utils.test.helpers.ClickEventType, button?: number): void;
    d3MouseOut(x: number, y: number, eventType?: powerbi.extensibility.utils.test.helpers.ClickEventType, button?: number): void;
    d3KeyEvent(typeArg: string, keyArg: string, keyCode: number): void;
}
declare module powerbi.extensibility.utils.test.helpers {
    function renderTimeout(fn: Function, timeout?: number): number;
}
declare module powerbi.extensibility.utils.test {
    import DataView = powerbi.DataView;
    import IViewport = powerbi.IViewport;
    import VisualObjectInstance = powerbi.VisualObjectInstance;
    import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
    import IVisual = powerbi.extensibility.visual.IVisual;
    import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
    import IVisualHost = powerbi.extensibility.visual.IVisualHost;
    abstract class VisualBuilderBase<T extends IVisual> {
        element: JQuery;
        viewport: IViewport;
        visualHost: IVisualHost;
        protected visual: T;
        constructor(width?: number, height?: number, element?: JQuery);
        protected abstract build(options: VisualConstructorOptions): T;
        init(): void;
        destroy(): void;
        update(dataView: DataView[] | DataView): void;
        updateRenderTimeout(dataViews: DataView[] | DataView, fn: Function, timeout?: number): number;
        updateEnumerateObjectInstancesRenderTimeout(dataViews: DataView[] | DataView, options: EnumerateVisualObjectInstancesOptions, fn: (enumeration: VisualObjectInstance[]) => void, timeout?: number): number;
        updateFlushAllD3Transitions(dataViews: DataView[] | DataView): void;
        updateflushAllD3TransitionsRenderTimeout(dataViews: DataView[] | DataView, fn: Function, timeout?: number): number;
        enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[];
    }
}
