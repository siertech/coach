package step;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import stepdescriptor.StepDescriptor;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;

@Entity
@Table(name = "step")
@Getter @Setter
public  class Step extends CrudClass {

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String titulo;
	
	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String descricao;
	
	@ManyToOne
	@JoinColumn(name="step_item_step_descriptor_id")
    @JsonView(Views.Public.class)
	private StepDescriptor stepDescriptor;
	

}
