package meta;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import papel.Papel;
import trilha.Trilha;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;

import evidencia.Evidencia;
import habito.Habito;

@Entity
@Table(name = "meta")
@Getter @Setter
public  class Meta extends CrudClass {
	
	
	@JsonView(Views.Public.class)
	private int prioridade;
	
	@JsonView(Views.Public.class)
	private int alcancada;
	
	@JsonView(Views.Public.class)
	private int exibirNaPaginaInicial;
	
	@JsonView(Views.Public.class)
	private String dataQueFoiAlcancada;
	
	@JsonView(Views.Public.class)
	private String titulo;
	
	@JsonView(Views.Public.class)
	private String data;
	
	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String papeis;
	
	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String mentores;
	
	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String contexto;
	
	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String ancoras;
	
	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String evidencias;
	
	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String impedimentos;
	
	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String comoVerAvanco;
	
	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String podeGanhar;
	
	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String podePerder;
	
	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String jaTentou;
	
	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String dificuldadesNeurologicas;
	
	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String recursosJaTenho;
	
	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String recursosNaoTenho;

	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String descricao;
	
	@ManyToOne
	@JoinColumn(name="id_papel",nullable=true)
	@JsonView(Views.Public.class)
	private Papel papel;
	
	/*
	
	 @OneToMany(mappedBy = "meta", targetEntity = Evidencia.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	 @JsonView(Views.Public.class)
	 private List<Evidencia> evidencias = new ArrayList<Evidencia>();
	 
	 @OneToMany(mappedBy = "meta", targetEntity =Trilha.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	 @JsonView(Views.Public.class)
	 private List<Trilha> trilhas = new ArrayList<Trilha>();
	 
	 @OneToMany(mappedBy = "meta", targetEntity =Habito.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	 @JsonIgnore
	 private List<Habito> habitos = new ArrayList<Habito>();
	 
	 */

}
