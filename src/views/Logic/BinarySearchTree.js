import TreeNode from "./TreeNode";
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        if (!this.root) {
            this.root = new TreeNode(value);
        } else {
            value = parseFloat(value);
            this.insertNode(this.root, value);
        }
    }

    insertNode(node, value) {
        if (value === node.value || value === null) {
            return 0;
        }
        // const numericValue = typeof value === 'string' ? parseFloat(value) : value;
        // node.value = parseFloat(node.value)

        if (value < node.value) {
            if (!node.left) {
                node.left = new TreeNode(value);
                return 1;
            } else {
                return this.insertNode(node.left, value);
            }
        } else
            if (value > node.value) {
                if (!node.right) {
                    node.right = new TreeNode(value);
                    return 1;
                } else {
                    return this.insertNode(node.right, value);
                }
            }
    }
    toObject() {
        return this.treeToObject(this.root);
    }

    treeToObject(node) {
        if (!node) {
            return { name: null };;
        }

        const treeObject = {
            name: node.value,
            children: [
                this.treeToObject(node.left),
                this.treeToObject(node.right),
            ],
        };

        return treeObject;
    }
    search(value) {
        value = parseFloat(value);
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
        if (!node) {
            return false;
        }

        if (parseFloat(value) < parseFloat(node.value)) {
            return this.searchNode(node.left, value);
        } else if (parseFloat(value) > parseFloat(node.value)) {
            return this.searchNode(node.right, value);
        } else {
            return true;
        }
    }
    delete(value) {
        value = parseFloat(value);
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(node, value) {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        } else {
            if (node.left === null && node.right === null) {
                return null;
            } else if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            } else {
                const minValue = this.findMinValue(node.right);
                node.value = minValue;

                node.right = this.deleteNode(node.right, minValue);
            }
        }
        return node;
    }

    findMinValue(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node.value;
    }
    getHeight() {
        return this.calculateHeight(this.root);
    }

    calculateHeight(node) {
        if (node === null) {
            return 0;
        }

        const leftHeight = this.calculateHeight(node.left);
        const rightHeight = this.calculateHeight(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }
}
export default BinarySearchTree