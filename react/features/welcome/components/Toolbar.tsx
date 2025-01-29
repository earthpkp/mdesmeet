import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WithTranslation } from 'react-i18next';
import { translate } from '../../base/i18n/functions';
import SettingsButton from '../../settings/components/web/SettingsButton';
import { SETTINGS_TABS } from '../../settings/constants';

interface IProps extends WithTranslation {
    DEFAULT_WELCOME_PAGE_LOGO_URL: string;  // Required prop
    showAdditionalToolbarContent?: boolean;
    interfaceConfig?: any;
}

class Toolbar extends Component<IProps> {
    private _additionalToolbarContentRef: HTMLDivElement | null = null;

    constructor(props: IProps) {
        super(props);
        this._setAdditionalToolbarContentRef = this._setAdditionalToolbarContentRef.bind(this);
    }

    _setAdditionalToolbarContentRef(el: HTMLDivElement | null): void {
        this._additionalToolbarContentRef = el;
    }

    render() {
        const {
            DEFAULT_WELCOME_PAGE_LOGO_URL,
            showAdditionalToolbarContent
        } = this.props;

        return (
            <div className='toolbar-content'>
                <div className='header-watermark-container'>
                    <div className='toolbar-content'>
                        <img 
                            src={'images/watermark4.png'}
                            alt="Logo"
                            className='welcome-logo'
                        />
                        <SettingsButton
                            defaultTab={SETTINGS_TABS.CALENDAR}
                            isDisplayedOnWelcomePage={true} />
                        {showAdditionalToolbarContent && (
                            <div
                                className='settings-toolbar-content'
                                ref={this._setAdditionalToolbarContentRef} />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        // Add any state mapping you need
    };
}

export default translate(connect(mapStateToProps)(Toolbar));