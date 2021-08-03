export const MODAL_STYLES = `
    .wallkit-modal-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(18, 18, 20, 0.9);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        overflow-y: auto;
        padding: 70px 15px 20px;
    }

    .wallkit-modal-wrapper__content {
        background-color: #fff;
        flex-shrink: 0;
        box-sizing: border-box;
    }

    .wallkit-modal-wrapper__close-btn {
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
        color: #fff;
        font-size: 37px;
        width: 37px;
        height: 37px;
        text-align: center;
        line-height: 34px;
    }

    .wallkit-modal-wrapper .wk-frame {
        transition: all 0.3s linear 0s;
        max-width: 100%;
        border: none;
    }
    
    .auth-modal {
    }
    
    .auth-modal .wallkit-modal-wrapper__content {
        padding: 20px;
    }
`;