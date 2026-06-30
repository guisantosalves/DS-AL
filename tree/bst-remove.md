# BST — função `remove(value)`

## Por que remover é complicado?

Numa BST comum, deletar um nó simplesmente "solta" seus filhos:

```
    20
   /  \
  10   30       → remover 10 → 5 e 15 ficam soltos
 /  \
5   15
```

A solução é **substituir** o nó removido por outro nó que mantenha a propriedade da BST:
> todo nó à esquerda é menor, todo nó à direita é maior.

---

## O In-order Successor

O único nó que pode substituir qualquer nó sem quebrar a BST é o **in-order successor**:
o nó mais à esquerda da subárvore direita.

```
    10           valores abaixo de 10: 5, 12, 15
   /  \
  5   15         in-order successor = 12
     /            → maior que tudo à esquerda (5)
    12            → menor que tudo à direita (15)
```

---

## Os 3 casos

### Caso 1 — Nó não tem filho direito

```
    20
   /  \
  10   30        remover 10
 /
5
```

Sem filho direito — basta ligar o filho esquerdo diretamente ao pai:

```
    20
   /  \
  5   30         parentNode.left = currentNode.left
```

**Se o nó removido é a raiz:**
```
  10             this.root = currentNode.left
 /
5

→   5
```

---

### Caso 2 — Filho direito não tem filho esquerdo

```
    20
   /  \
  10   30        remover 10
 /  \
5   15
      \
      18
```

O filho direito (`15`) vai para o lugar do `10`.
O filho esquerdo (`5`) vai para o `.left` do `15` (que estava vazio):

```
    20
   /  \
  15   30
 /  \
5   18
```

```javascript
currentNode.right.left = currentNode.left;  // 15.left = 5
parentNode.left = currentNode.right;        // 20.left = 15
```

---

### Caso 3 — Filho direito tem filho esquerdo (caso geral)

```
      20
     /  \
   10    30       remover 10
  /  \
 5   15
    /  \
   12   17
```

**Passo 1** — achar o in-order successor (`leftmost`):
```
leftmost       = 10.right.left = 12
leftMostParent = 10.right      = 15
```
Desce pelo `.left` até não ter mais esquerda.

**Passo 2** — desconectar o `leftmost` do lugar dele:
```javascript
leftMostParent.left = leftmost.right;
// 15.left = filho direito do 12 (se existir, senão null)
```
```
      20
     /  \
   10    30
  /  \
 5   15
    /  \
  null  17       ← 12 foi desconectado
```

**Passo 3** — `leftmost` herda os filhos do nó removido:
```javascript
leftmost.left  = currentNode.left;   // 12.left  = 5
leftmost.right = currentNode.right;  // 12.right = 15
```

**Passo 4** — conectar ao pai:
```javascript
parentNode.left = leftmost;          // 20.left  = 12
```

**Resultado:**
```
      20
     /  \
   12    30
  /  \
 5   15
       \
       17
```

✅ Propriedade BST mantida:
- `5 < 12` ✓
- `15 > 12` ✓
- `17 > 12` ✓
- `12 < 20` ✓

---

## Resumo dos 3 casos

```
                  remover nó X
                       │
          ┌────────────┴────────────┐
       X.right                  X.right
        == null                 != null
          │                        │
    caso 1: liga              X.right.left
    X.left ao pai              == null?
                          ┌────────┴────────┐
                         sim               não
                          │                 │
                       caso 2:           caso 3:
                    X.right assume     acha leftmost
                    lugar de X,        (in-order successor),
                    herda X.left       substitui X

```

---

## Lógica do `parentNode`

Em todos os casos, após decidir o substituto, o código verifica de qual lado o nó removido estava:

```javascript
if (currentNode.value < parentNode.value) {
  parentNode.left = substituto;
} else {
  parentNode.right = substituto;
}
```

E se `parentNode === null`, o nó removido era a raiz → `this.root = substituto`.
