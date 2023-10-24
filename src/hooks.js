import PropTypes from 'prop-types';
import React, { useEffect, useRef, useImperativeHandle } from "react";
import WebDataRocks from "@webdatarocks/webdatarocks";

export function Pivot(props, ref) {
    const webdatarocksRef = useRef()

    let webdatarocks = null;
    useEffect(() => {
        webdatarocks = new WebDataRocks({
            ...props,
            container: webdatarocksRef.current
        });

        return () => webdatarocks.dispose()
    }, [])

    useImperativeHandle(ref, () => ({
        webDataRocks: () => {
            return webdatarocks;
        }
    }));

    Pivot.propTypes = {
        beforetoolbarcreated: PropTypes.func,
        cellclick: PropTypes.func,
        celldoubleclick: PropTypes.func,
        customizeCell: PropTypes.func,
        datachanged: PropTypes.func,
        dataerror: PropTypes.func,
        datafilecancelled: PropTypes.func,
        dataloaded: PropTypes.func,
        fieldslistclose: PropTypes.func,
        fieldslistopen: PropTypes.func,
        filteropen: PropTypes.func,
        fullscreen: PropTypes.func,
        global: PropTypes.object,
        height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        loadingdata: PropTypes.func,
        loadinglocalization: PropTypes.func,
        loadingreportfile: PropTypes.func,
        localizationerror: PropTypes.func,
        localizationloaded: PropTypes.func,
        openingreportfile: PropTypes.func,
        querycomplete: PropTypes.func,
        queryerror: PropTypes.func,
        ready: PropTypes.func,
        report: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        reportchange: PropTypes.func,
        reportcomplete: PropTypes.func,
        reportfilecancelled: PropTypes.func,
        reportfileerror: PropTypes.func,
        reportfileloaded: PropTypes.func,
        runningquery: PropTypes.func,
        toolbar: PropTypes.bool,
        update: PropTypes.func,
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }

    return <div ref={webdatarocksRef}>Pivot</div>
}

export default Pivot = React.forwardRef(Pivot);
